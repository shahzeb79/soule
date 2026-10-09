import React, { useState, useEffect, useRef } from 'react';
import { Product, ProductColorway, ProductSize, Activity, Cushioning } from '../types';
import { headlessCMS } from '../cms/headlessCms';
import { uploadShoeImage, deleteShoeImageByUrl } from '../cms/storageService';
import { isFirebaseConfigured } from '../cms/firebaseClient';
import { SouleLogo } from './SouleLogo';
import {
  Plus,
  Edit2,
  Trash2,
  Upload,
  X,
  Search,
  Check,
  ArrowLeft,
  Database,
  HardDrive,
  RefreshCw,
  Image as ImageIcon,
  ExternalLink,
  Layers,
  Sparkles,
  LogOut,
  ShieldCheck
} from 'lucide-react';
import { AdminLogin } from './AdminLogin';
import {
  isAdminAuthenticated,
  logoutAdmin,
  getActiveAdminUsername
} from '../cms/adminAuth';

interface AdminPanelProps {
  onBackToStore: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onBackToStore }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => isAdminAuthenticated());
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState<'all' | 'men' | 'women' | 'kids'>('all');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Form State
  const [formName, setFormName] = useState('');
  const [formSubCategory, setFormSubCategory] = useState('Road Running');
  const [formGender, setFormGender] = useState<'men' | 'women' | 'kids'>('men');
  const [formActivity, setFormActivity] = useState<Activity>('Road Running');
  const [formCushioning, setFormCushioning] = useState<Cushioning>('Responsive');
  const [formPriceCHF, setFormPriceCHF] = useState<number>(199.90);
  const [formBadge, setFormBadge] = useState('');
  const [formWeight, setFormWeight] = useState('230 g');
  const [formHeelDrop, setFormHeelDrop] = useState('6 mm');
  const [formStability, setFormStability] = useState('Neutral');
  const [formLacing, setFormLacing] = useState('Speed Lacing');
  const [formDescription, setFormDescription] = useState('');
  const [formFeatures, setFormFeatures] = useState<string>('Engineered Swiss breathable upper\nDual-density SouleFoam™ cushioning\nCarbon Speedboard propulsion');
  const [formColorways, setFormColorways] = useState<ProductColorway[]>([
    { id: 'cw-1', name: 'Chalk White', primaryColorHex: '#E2E8F0', accentColorHex: '#1E293B', image: '' }
  ]);
  const [formSizes, setFormSizes] = useState<ProductSize[]>([
    { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
    { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
    { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
    { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
    { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true }
  ]);

  // Uploading state for images
  const [uploadingColorwayIndex, setUploadingColorwayIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedCwForUpload, setSelectedCwForUpload] = useState<number>(0);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  const fetchProducts = async (forceFresh = true) => {
    setIsLoading(true);
    try {
      const res = await headlessCMS.getProducts(undefined, forceFresh);
      setProducts(res.data);
    } catch (e: any) {
      console.error('Failed to load products:', e);
      showToast('error', `Failed to load products from Firebase: ${e.message || 'Error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSyncWithFirestore = async () => {
    setIsSyncing(true);
    try {
      const res = await headlessCMS.seedDemoProductsToFirestore();
      showToast('success', `Synced ${res.count} products to Firebase Firestore collection "shoes_data"!`);
      await fetchProducts(true);
    } catch (err: any) {
      console.error('Sync failed:', err);
      showToast('error', `Firestore sync failed: ${err.message}`);
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
    }
  }, [isAuthenticated]);

  const showToast = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  // Open Add Modal
  const handleOpenAdd = () => {
    setEditingProduct(null);
    setFormName('');
    setFormSubCategory('Road Running');
    setFormGender('men');
    setFormActivity('Road Running');
    setFormCushioning('Responsive');
    setFormPriceCHF(199.90);
    setFormBadge('');
    setFormWeight('235 g');
    setFormHeelDrop('6 mm');
    setFormStability('Neutral');
    setFormLacing('Speed Lacing');
    setFormDescription('Engineered Swiss performance shoe with zero-gravity hollow cushioning.');
    setFormFeatures('Breathable engineered upper\nDual-density SouleFoam™ pods\nResponsive carbon SpeedBoard');
    setFormColorways([
      { id: `cw-${Date.now()}-1`, name: 'Chalk White / Slate', primaryColorHex: '#E2E8F0', accentColorHex: '#1E293B', image: '' }
    ]);
    setFormSizes([
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (p: Product) => {
    setEditingProduct(p);
    setFormName(p.name);
    setFormSubCategory(p.subCategory || 'Road Running');
    setFormGender(p.gender);
    setFormActivity(p.activity);
    setFormCushioning(p.cushioning);
    setFormPriceCHF(p.priceCHF);
    setFormBadge(p.badge || '');
    setFormWeight(p.weight || '230 g');
    setFormHeelDrop(p.heelDrop || '6 mm');
    setFormStability(p.stability || 'Neutral');
    setFormLacing(p.lacing || 'Speed Lacing');
    setFormDescription(p.description || '');
    setFormFeatures((p.features || []).join('\n'));
    setFormColorways(p.colorways && p.colorways.length > 0 ? p.colorways : [
      { id: `cw-${Date.now()}`, name: 'Default', primaryColorHex: '#E2E8F0', accentColorHex: '#1E293B', image: '' }
    ]);
    setFormSizes(p.sizes || []);
    setIsModalOpen(true);
  };

  // Handle Image File Upload to Firebase Storage
  const handleTriggerUpload = (colorwayIndex: number) => {
    setSelectedCwForUpload(colorwayIndex);
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingColorwayIndex(selectedCwForUpload);
    try {
      const slug = formName.toLowerCase().replace(/[^a-z0-9]/g, '-') || 'shoe';
      const downloadUrl = await uploadShoeImage(file, slug);

      // Update colorways state with new image URL
      const updated = [...formColorways];
      updated[selectedCwForUpload] = {
        ...updated[selectedCwForUpload],
        image: downloadUrl
      };
      setFormColorways(updated);
      showToast('success', 'Image uploaded to Firebase Storage (shoes_product)!');
    } catch (err: any) {
      console.error('Image upload failed:', err);
      showToast('error', `Image upload failed: ${err.message || 'Check storage permissions'}`);
    } finally {
      setUploadingColorwayIndex(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Handle Delete Image from Storage
  const handleDeleteImage = async (colorwayIndex: number) => {
    const targetCw = formColorways[colorwayIndex];
    if (targetCw.image) {
      await deleteShoeImageByUrl(targetCw.image);
      const updated = [...formColorways];
      updated[colorwayIndex] = {
        ...updated[colorwayIndex],
        image: ''
      };
      setFormColorways(updated);
      showToast('success', 'Image removed from Firebase Storage bucket.');
    }
  };

  // Save Shoe (Create or Update)
  const handleSaveShoe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      showToast('error', 'Product name is required');
      return;
    }

    setIsSaving(true);
    try {
      const slug = formName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const shoeId = editingProduct ? editingProduct.id : `${formGender}-${slug}-${Date.now()}`;

      const productPayload: Product = {
        id: shoeId,
        slug,
        name: formName.trim(),
        subCategory: formSubCategory.trim(),
        gender: formGender,
        activity: formActivity,
        cushioning: formCushioning,
        priceCHF: Number(formPriceCHF) || 199.90,
        badge: formBadge.trim(),
        isNew: true,
        isBestSeller: Boolean(editingProduct?.isBestSeller),
        weight: formWeight.trim(),
        heelDrop: formHeelDrop.trim(),
        stability: formStability.trim(),
        lacing: formLacing.trim(),
        description: formDescription.trim(),
        features: formFeatures.split('\n').map((f) => f.trim()).filter(Boolean),
        technologies: editingProduct?.technologies || [
          { name: 'SouleFoam™ Dual Core', description: 'Zero-gravity responsive foam matrix' }
        ],
        sustainability: editingProduct?.sustainability || {
          recycledContent: '42% Recycled Content',
          details: 'Engineered with sustainable Swiss bio-polymers'
        },
        rating: editingProduct?.rating || 4.9,
        reviewCount: editingProduct?.reviewCount || 1,
        colorways: formColorways,
        sizes: formSizes.length > 0 ? formSizes : [
          { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true }
        ]
      };

      if (editingProduct) {
        await headlessCMS.updateShoe(productPayload);
        showToast('success', `Updated "${formName}" in shoes_data!`);
      } else {
        await headlessCMS.createShoe(productPayload);
        showToast('success', `Created "${formName}" in shoes_data!`);
      }

      setIsModalOpen(false);
      await fetchProducts(true);
    } catch (err: any) {
      console.error('Save error:', err);
      showToast('error', `Failed to save: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  // Delete Shoe handler
  const handleConfirmDelete = async () => {
    if (!productToDelete) return;

    setIsDeleting(true);
    try {
      const imageUrls = productToDelete.colorways.map((cw) => cw.image).filter(Boolean);
      await headlessCMS.deleteShoe(productToDelete.id, imageUrls);
      showToast('success', `Deleted "${productToDelete.name}" from shoes_data.`);
      setProductToDelete(null);
      await fetchProducts(true);
    } catch (err: any) {
      console.error('Delete failed:', err);
      showToast('error', `Delete failed: ${err.message}`);
    } finally {
      setIsDeleting(false);
    }
  };

  // Filtering
  const filteredProducts = products.filter((p) => {
    const matchesGender = genderFilter === 'all' || p.gender === genderFilter;
    const matchesSearch =
      searchTerm === '' ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.subCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.activity.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGender && matchesSearch;
  });

  if (!isAuthenticated) {
    return (
      <AdminLogin
        onSuccess={() => {
          setIsAuthenticated(true);
        }}
        onBackToStore={onBackToStore}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F4F6] text-[#121212] flex flex-col antialiased">
      {/* Hidden File Input for Storage Upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png, image/jpeg, image/webp"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Admin Top Bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-neutral-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToStore}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Store</span>
            </button>
            <div className="h-4 w-px bg-neutral-200" />
            <div className="flex items-center gap-2">
              <SouleLogo size={24} color="#0CB581" />
              <span className="font-extrabold text-sm tracking-tight text-neutral-900">
                soule CMS Admin
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                collection: shoes_data
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-600 text-xs font-medium border border-neutral-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Admin: <strong className="text-neutral-900">{getActiveAdminUsername()}</strong></span>
            </div>

            <button
              onClick={() => fetchProducts(true)}
              disabled={isLoading}
              className="p-2 text-neutral-600 hover:text-black rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
              title="Refresh from Firebase"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={handleSyncWithFirestore}
              disabled={isSyncing}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold rounded-xl transition-all cursor-pointer disabled:opacity-50"
              title="Sync demo catalog to Firebase Firestore shoes_data"
            >
              <Database className={`w-3.5 h-3.5 text-emerald-600 ${isSyncing ? 'animate-pulse' : ''}`} />
              <span className="hidden sm:inline">{isSyncing ? 'Syncing...' : 'Sync Catalog to Firebase'}</span>
            </button>
            <button
              onClick={handleOpenAdd}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#121212] hover:bg-black text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 text-[#0CB581]" />
              <span>Add New Shoe</span>
            </button>
            <button
              onClick={() => {
                logoutAdmin();
                setIsAuthenticated(false);
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-2 text-neutral-600 hover:text-red-600 hover:bg-red-50 rounded-xl text-xs font-semibold border border-neutral-200 hover:border-red-200 transition-colors cursor-pointer"
              title="Log Out of Admin CMS"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Notification Toast */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl shadow-xl border text-xs font-bold flex items-center gap-2 animate-fadeIn ${
            notification.type === 'success'
              ? 'bg-emerald-900 text-emerald-100 border-emerald-700'
              : 'bg-red-900 text-red-100 border-red-700'
          }`}
        >
          {notification.type === 'success' ? <Check className="w-4 h-4 text-emerald-300" /> : <X className="w-4 h-4 text-red-300" />}
          <span>{notification.message}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-6">
        {/* Metric Cards Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs">
            <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Total in shoes_data</p>
            <p className="text-2xl font-black text-neutral-900 mt-1 tabular-nums">{products.length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs">
            <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Men's Shoes</p>
            <p className="text-2xl font-black text-neutral-900 mt-1 tabular-nums">
              {products.filter((p) => p.gender === 'men').length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs">
            <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Women's Shoes</p>
            <p className="text-2xl font-black text-neutral-900 mt-1 tabular-nums">
              {products.filter((p) => p.gender === 'women').length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs">
            <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Kids' Shoes</p>
            <p className="text-2xl font-black text-neutral-900 mt-1 tabular-nums">
              {products.filter((p) => p.gender === 'kids').length}
            </p>
          </div>
        </div>

        {/* Toolbar: Search & Gender Tabs */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search shoes by title, activity..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-black"
            />
          </div>

          {/* Gender Filter Buttons */}
          <div className="inline-flex p-1 bg-neutral-100 rounded-lg border border-neutral-200 text-xs">
            {[
              { id: 'all', label: 'All Shoes' },
              { id: 'men', label: 'Men' },
              { id: 'women', label: 'Women' },
              { id: 'kids', label: 'Kids' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setGenderFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
                  genderFilter === tab.id ? 'bg-white text-black shadow-2xs' : 'text-neutral-500 hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Shoes Table */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Shoe</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Activity</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Colorways</th>
                  <th className="py-3 px-4">Storage Images</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {isLoading ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-neutral-400">
                      Loading shoes from Firebase shoes_data...
                    </td>
                  </tr>
                ) : filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-neutral-400">
                      No shoes matching your filter.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((p) => {
                    const primaryImg = p.colorways[0]?.image;
                    const storageImgCount = p.colorways.filter((c) => c.image && c.image.length > 0).length;

                    return (
                      <tr key={p.id} className="hover:bg-neutral-50/80 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-neutral-100 rounded-lg overflow-hidden flex items-center justify-center shrink-0 border border-neutral-200">
                              {primaryImg ? (
                                <img src={primaryImg} alt={p.name} className="w-full h-full object-cover" />
                              ) : (
                                <ImageIcon className="w-4 h-4 text-neutral-300" />
                              )}
                            </div>
                            <div>
                              <p className="font-bold text-neutral-900">{p.name}</p>
                              <p className="text-[10px] text-neutral-400 font-mono">{p.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="capitalize px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-100 text-neutral-700">
                            {p.gender}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-neutral-600 font-medium">{p.activity}</td>
                        <td className="py-3 px-4 font-bold tabular-nums text-neutral-900">
                          CHF {p.priceCHF.toFixed(2)}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1">
                            {p.colorways.map((cw, i) => (
                              <span
                                key={i}
                                className="w-3.5 h-3.5 rounded-full border border-neutral-300 block"
                                style={{ backgroundColor: cw.primaryColorHex }}
                                title={cw.name}
                              />
                            ))}
                            <span className="text-[10px] text-neutral-400 ml-1">({p.colorways.length})</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-neutral-600">
                          {storageImgCount > 0 ? (
                            <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" />
                              <span>{storageImgCount} uploaded</span>
                            </span>
                          ) : (
                            <span className="text-[11px] text-neutral-400">Vector only</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="inline-flex items-center gap-1">
                            <button
                              onClick={() => handleOpenEdit(p)}
                              className="p-1.5 text-neutral-600 hover:text-black hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                              title="Edit Shoe"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => setProductToDelete(p)}
                              className="p-1.5 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              title="Delete Shoe"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* ======================================================== */}
      {/* Create / Edit Shoe Drawer Modal                          */}
      {/* ======================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/60">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center">
                  <Edit2 className="w-3.5 h-3.5 text-[#0CB581]" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-neutral-900">
                    {editingProduct ? `Edit Shoe: ${editingProduct.name}` : 'Add New Shoe to shoes_data'}
                  </h3>
                  <p className="text-[11px] text-neutral-500">
                    Saves to Firestore collection and uploads images to Firebase Storage bucket.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSaveShoe} className="p-6 overflow-y-auto flex-1 space-y-6 text-xs">
              {/* General Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Shoe Model Name *</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. CloudSprint Elite"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-black font-semibold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Category Subtitle</label>
                  <input
                    type="text"
                    value={formSubCategory}
                    onChange={(e) => setFormSubCategory(e.target.value)}
                    placeholder="e.g. Road Running · Marathon"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Gender *</label>
                  <select
                    value={formGender}
                    onChange={(e) => setFormGender(e.target.value as any)}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-black font-semibold"
                  >
                    <option value="men">Men's Footwear</option>
                    <option value="women">Women's Footwear</option>
                    <option value="kids">Kids' Footwear</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Activity</label>
                  <select
                    value={formActivity}
                    onChange={(e) => setFormActivity(e.target.value as any)}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-black font-semibold"
                  >
                    <option value="Road Running">Road Running</option>
                    <option value="Trail Running">Trail Running</option>
                    <option value="Speed & Racing">Speed & Racing</option>
                    <option value="All Day">All Day</option>
                    <option value="Hiking & Trekking">Hiking & Trekking</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Cushioning Level</label>
                  <select
                    value={formCushioning}
                    onChange={(e) => setFormCushioning(e.target.value as any)}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-black font-semibold"
                  >
                    <option value="Plush">Plush</option>
                    <option value="Max">Max</option>
                    <option value="Responsive">Responsive</option>
                    <option value="Ultralight">Ultralight</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Price (CHF) *</label>
                  <input
                    type="number"
                    step="0.05"
                    required
                    value={formPriceCHF}
                    onChange={(e) => setFormPriceCHF(parseFloat(e.target.value))}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-black font-bold font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Weight</label>
                  <input
                    type="text"
                    value={formWeight}
                    onChange={(e) => setFormWeight(e.target.value)}
                    placeholder="e.g. 240 g / 8.5 oz"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Heel Drop</label>
                  <input
                    type="text"
                    value={formHeelDrop}
                    onChange={(e) => setFormHeelDrop(e.target.value)}
                    placeholder="e.g. 7 mm"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Firebase Storage Image Uploaders / Colorways */}
              <div className="space-y-3 pt-4 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-sm text-neutral-900 flex items-center gap-1.5">
                      <HardDrive className="w-4 h-4 text-[#0CB581]" />
                      <span>Shoe Images & Storage Bucket</span>
                    </h4>
                    <p className="text-[11px] text-neutral-500">
                      Upload directly to Firebase Storage bucket <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[10px]">gs://meister-6670d.firebasestorage.app/shoes_product</code>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormColorways([
                        ...formColorways,
                        {
                          id: `cw-${Date.now()}`,
                          name: 'New Colorway',
                          primaryColorHex: '#E2E8F0',
                          accentColorHex: '#1E293B',
                          image: ''
                        }
                      ]);
                    }}
                    className="text-xs font-bold text-neutral-800 hover:text-black flex items-center gap-1 px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-lg cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Colorway</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {formColorways.map((cw, idx) => (
                    <div key={cw.id || idx} className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-500 mb-0.5">Colorway Name</label>
                          <input
                            type="text"
                            value={cw.name}
                            onChange={(e) => {
                              const updated = [...formColorways];
                              updated[idx].name = e.target.value;
                              setFormColorways(updated);
                            }}
                            className="w-full p-2 bg-white border border-neutral-200 rounded text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-500 mb-0.5">Primary Hex</label>
                          <div className="flex items-center gap-1.5">
                            <input
                              type="color"
                              value={cw.primaryColorHex}
                              onChange={(e) => {
                                const updated = [...formColorways];
                                updated[idx].primaryColorHex = e.target.value;
                                setFormColorways(updated);
                              }}
                              className="w-7 h-7 rounded border border-neutral-300 p-0 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={cw.primaryColorHex}
                              onChange={(e) => {
                                const updated = [...formColorways];
                                updated[idx].primaryColorHex = e.target.value;
                                setFormColorways(updated);
                              }}
                              className="w-full p-2 bg-white border border-neutral-200 rounded font-mono text-xs"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-500 mb-0.5">Accent Hex</label>
                          <div className="flex items-center gap-1.5">
                            <input
                              type="color"
                              value={cw.accentColorHex}
                              onChange={(e) => {
                                const updated = [...formColorways];
                                updated[idx].accentColorHex = e.target.value;
                                setFormColorways(updated);
                              }}
                              className="w-7 h-7 rounded border border-neutral-300 p-0 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={cw.accentColorHex}
                              onChange={(e) => {
                                const updated = [...formColorways];
                                updated[idx].accentColorHex = e.target.value;
                                setFormColorways(updated);
                              }}
                              className="w-full p-2 bg-white border border-neutral-200 rounded font-mono text-xs"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Image Preview & Upload Controls */}
                      <div className="flex items-center justify-between pt-2 border-t border-neutral-200/60">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 bg-white rounded-lg border border-neutral-200 flex items-center justify-center overflow-hidden">
                            {cw.image ? (
                              <img src={cw.image} alt={cw.name} className="w-full h-full object-cover" />
                            ) : (
                              <span className="text-[9px] text-neutral-400 font-bold text-center px-1">Dynamic Vector</span>
                            )}
                          </div>
                          <div>
                            {cw.image ? (
                              <div className="space-y-0.5">
                                <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Image in Firebase Storage</span>
                                </span>
                                <a
                                  href={cw.image}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] text-neutral-500 hover:text-black flex items-center gap-1 underline"
                                >
                                  <span>View file</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            ) : (
                              <p className="text-[11px] text-neutral-500">
                                No uploaded file yet. Uses Swiss vector generator.
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            disabled={uploadingColorwayIndex === idx}
                            onClick={() => handleTriggerUpload(idx)}
                            className="px-3 py-1.5 bg-neutral-900 hover:bg-black text-white rounded-lg font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs"
                          >
                            {uploadingColorwayIndex === idx ? (
                              <>
                                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Uploading...</span>
                              </>
                            ) : (
                              <>
                                <Upload className="w-3.5 h-3.5 text-[#0CB581]" />
                                <span>{cw.image ? 'Replace Image' : 'Upload Image'}</span>
                              </>
                            )}
                          </button>

                          {cw.image && (
                            <button
                              type="button"
                              onClick={() => handleDeleteImage(idx)}
                              className="px-2.5 py-1.5 text-red-600 hover:bg-red-50 rounded-lg font-bold border border-red-200 cursor-pointer"
                              title="Delete image from Firebase Storage"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description & Features */}
              <div className="space-y-3 pt-4 border-t border-neutral-200">
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs"
                    placeholder="Short product storytelling description"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Key Features (One per line)</label>
                  <textarea
                    rows={3}
                    value={formFeatures}
                    onChange={(e) => setFormFeatures(e.target.value)}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs font-mono"
                    placeholder="Feature bullet 1&#10;Feature bullet 2"
                  />
                </div>
              </div>

              {/* Save Footer */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-neutral-300 text-neutral-700 font-bold hover:bg-neutral-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold flex items-center gap-2 cursor-pointer shadow-md"
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Saving to shoes_data...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 text-[#0CB581]" />
                      <span>{editingProduct ? 'Update Shoe' : 'Save New Shoe'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* ======================================================== */}
      {/* Delete Confirmation Modal                                */}
      {/* ======================================================== */}
      {productToDelete && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-neutral-900">
                Delete "{productToDelete.name}"?
              </h3>
              <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                This will permanently delete this shoe document from the <strong className="text-neutral-800">shoes_data</strong> Firestore collection, and remove any associated images from your Firebase Storage bucket.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setProductToDelete(null)}
                className="px-4 py-2 text-xs font-bold text-neutral-600 hover:bg-neutral-100 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleConfirmDelete}
                className="px-4 py-2 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"
              >
                {isDeleting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <span>Delete Product</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
