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
  ShieldCheck,
  Ruler,
  Camera,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { AdminLogin } from './AdminLogin';
import {
  isAdminAuthenticated,
  logoutAdmin,
  getActiveAdminUsername
} from '../cms/adminAuth';

export const MEN_STANDARD_SIZES: ProductSize[] = [
  { size: 'US 7', us: 'US 7', eu: 'EU 40', inStock: true },
  { size: 'US 7.5', us: 'US 7.5', eu: 'EU 40.5', inStock: true },
  { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
  { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
  { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
  { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
  { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
  { size: 'US 10.5', us: 'US 10.5', eu: 'EU 44.5', inStock: true },
  { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true },
  { size: 'US 11.5', us: 'US 11.5', eu: 'EU 45.5', inStock: true },
  { size: 'US 12', us: 'US 12', eu: 'EU 46', inStock: true },
  { size: 'US 12.5', us: 'US 12.5', eu: 'EU 47', inStock: true },
  { size: 'US 13', us: 'US 13', eu: 'EU 47.5', inStock: true },
  { size: 'US 14', us: 'US 14', eu: 'EU 48.5', inStock: true }
];

export const WOMEN_STANDARD_SIZES: ProductSize[] = [
  { size: 'US 5', us: 'US 5', eu: 'EU 36', inStock: true },
  { size: 'US 5.5', us: 'US 5.5', eu: 'EU 36.5', inStock: true },
  { size: 'US 6', us: 'US 6', eu: 'EU 37', inStock: true },
  { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37.5', inStock: true },
  { size: 'US 7', us: 'US 7', eu: 'EU 38', inStock: true },
  { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38.5', inStock: true },
  { size: 'US 8', us: 'US 8', eu: 'EU 39', inStock: true },
  { size: 'US 8.5', us: 'US 8.5', eu: 'EU 40', inStock: true },
  { size: 'US 9', us: 'US 9', eu: 'EU 40.5', inStock: true },
  { size: 'US 9.5', us: 'US 9.5', eu: 'EU 41', inStock: true },
  { size: 'US 10', us: 'US 10', eu: 'EU 42', inStock: true },
  { size: 'US 10.5', us: 'US 10.5', eu: 'EU 42.5', inStock: true },
  { size: 'US 11', us: 'US 11', eu: 'EU 43', inStock: true }
];

export const EU_STANDARD_SIZES: ProductSize[] = [
  { size: 'EU 38', us: 'US 6', eu: 'EU 38', inStock: true },
  { size: 'EU 39', us: 'US 6.5', eu: 'EU 39', inStock: true },
  { size: 'EU 40', us: 'US 7', eu: 'EU 40', inStock: true },
  { size: 'EU 41', us: 'US 8', eu: 'EU 41', inStock: true },
  { size: 'EU 42', us: 'US 8.5', eu: 'EU 42', inStock: true },
  { size: 'EU 43', us: 'US 9.5', eu: 'EU 43', inStock: true },
  { size: 'EU 44', us: 'US 10', eu: 'EU 44', inStock: true },
  { size: 'EU 45', us: 'US 11', eu: 'EU 45', inStock: true },
  { size: 'EU 46', us: 'US 12', eu: 'EU 46', inStock: true }
];

export const KIDS_STANDARD_SIZES: ProductSize[] = [
  { size: 'EU 28', us: 'US 11K', eu: 'EU 28', inStock: true },
  { size: 'EU 29', us: 'US 12K', eu: 'EU 29', inStock: true },
  { size: 'EU 30', us: 'US 12.5K', eu: 'EU 30', inStock: true },
  { size: 'EU 31', us: 'US 13K', eu: 'EU 31', inStock: true },
  { size: 'EU 32', us: 'US 1Y', eu: 'EU 32', inStock: true },
  { size: 'EU 33', us: 'US 1.5Y', eu: 'EU 33', inStock: true },
  { size: 'EU 34', us: 'US 2.5Y', eu: 'EU 34', inStock: true },
  { size: 'EU 35', us: 'US 3Y', eu: 'EU 35', inStock: true },
  { size: 'EU 36', us: 'US 4Y', eu: 'EU 36', inStock: true },
  { size: 'EU 37', us: 'US 5Y', eu: 'EU 37', inStock: true },
  { size: 'EU 38', us: 'US 5.5Y', eu: 'EU 38', inStock: true }
];

export const ANGLE_KEYS: Array<{ id: 'side' | 'perspective' | 'top' | 'sole' | 'front' | 'back'; label: string; desc: string }> = [
  { id: 'side', label: 'Side Profile', desc: 'Primary side angle view' },
  { id: 'perspective', label: '3/4 Dynamic Angle', desc: 'Quarter perspective view' },
  { id: 'top', label: 'Top-Down Aerial', desc: 'Bird-eye top view of upper & lacing' },
  { id: 'sole', label: 'Cloud Sole Bottom', desc: 'Outsole & traction lugs view' },
  { id: 'front', label: 'Front Toe-Box', desc: 'Direct frontal toe angle view' },
  { id: 'back', label: 'Heel / Back', desc: 'Rear heel counter & collar view' },
];

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
  const [formPriceCHF, setFormPriceCHF] = useState<number>(18500);
  const [formBadge, setFormBadge] = useState('');
  const [formWeight, setFormWeight] = useState('230 g');
  const [formHeelDrop, setFormHeelDrop] = useState('6 mm');
  const [formStability, setFormStability] = useState('Neutral');
  const [formLacing, setFormLacing] = useState('Speed Lacing');
  const [formDescription, setFormDescription] = useState('');
  const [formFeatures, setFormFeatures] = useState<string>('Engineered Swiss breathable upper\nDual-density SouleFoam™ cushioning\nCarbon Speedboard propulsion');
  const [formColorways, setFormColorways] = useState<ProductColorway[]>([
    {
      id: 'cw-1',
      name: 'Chalk White',
      primaryColorHex: '#E2E8F0',
      accentColorHex: '#1E293B',
      image: '',
      angles: {
        side: '',
        perspective: '',
        top: '',
        sole: '',
        front: '',
        back: ''
      }
    }
  ]);
  const [formSizes, setFormSizes] = useState<ProductSize[]>(MEN_STANDARD_SIZES);
  const [customSizeInput, setCustomSizeInput] = useState<string>('');

  // Uploading state for images
  const [uploadingColorwayIndex, setUploadingColorwayIndex] = useState<number | null>(null);
  const [selectedAngleForUpload, setSelectedAngleForUpload] = useState<string>('side');
  const [uploadingAngleIdentifier, setUploadingAngleIdentifier] = useState<string | null>(null);
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
    setFormPriceCHF(18500); // PKR default price
    setFormBadge('');
    setFormWeight('235 g');
    setFormHeelDrop('6 mm');
    setFormStability('Neutral');
    setFormLacing('Speed Lacing');
    setFormDescription('Engineered Swiss performance shoe with zero-gravity hollow cushioning.');
    setFormFeatures('Breathable engineered upper\nDual-density SouleFoam™ pods\nResponsive carbon SpeedBoard');
    setFormColorways([
      {
        id: `cw-${Date.now()}-1`,
        name: 'Chalk White / Slate',
        primaryColorHex: '#E2E8F0',
        accentColorHex: '#1E293B',
        image: '',
        angles: {
          side: '',
          perspective: '',
          top: '',
          sole: '',
          front: '',
          back: ''
        }
      }
    ]);
    // Preload ALL available sizes
    setFormSizes(MEN_STANDARD_SIZES.map(s => ({ ...s, inStock: true })));
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
    setFormPriceCHF(p.priceCHF < 500 ? Math.round(p.priceCHF * 100) : p.priceCHF);
    setFormBadge(p.badge || '');
    setFormWeight(p.weight || '230 g');
    setFormHeelDrop(p.heelDrop || '6 mm');
    setFormStability(p.stability || 'Neutral');
    setFormLacing(p.lacing || 'Speed Lacing');
    setFormDescription(p.description || '');
    setFormFeatures((p.features || []).join('\n'));
    setFormColorways(
      p.colorways && p.colorways.length > 0
        ? p.colorways.map((cw) => ({
            ...cw,
            angles: cw.angles || {
              side: cw.image || '',
              perspective: '',
              top: '',
              sole: '',
              front: '',
              back: ''
            }
          }))
        : [
            {
              id: `cw-${Date.now()}`,
              name: 'Default',
              primaryColorHex: '#E2E8F0',
              accentColorHex: '#1E293B',
              image: '',
              angles: { side: '', perspective: '', top: '', sole: '', front: '', back: '' }
            }
          ]
    );
    setFormSizes(p.sizes && p.sizes.length > 0 ? p.sizes : MEN_STANDARD_SIZES);
    setIsModalOpen(true);
  };

  // Size Management Helpers
  const handleAddAllSizesPreset = (preset: 'men' | 'women' | 'eu' | 'kids' | 'all') => {
    let sizesToAdd: ProductSize[] = [];
    if (preset === 'men') sizesToAdd = MEN_STANDARD_SIZES;
    else if (preset === 'women') sizesToAdd = WOMEN_STANDARD_SIZES;
    else if (preset === 'eu') sizesToAdd = EU_STANDARD_SIZES;
    else if (preset === 'kids') sizesToAdd = KIDS_STANDARD_SIZES;
    else if (preset === 'all') sizesToAdd = [...MEN_STANDARD_SIZES, ...WOMEN_STANDARD_SIZES];

    const map = new Map<string, ProductSize>();
    formSizes.forEach((s) => map.set(s.size, s));
    sizesToAdd.forEach((s) => {
      if (!map.has(s.size)) {
        map.set(s.size, { ...s, inStock: true });
      }
    });
    setFormSizes(Array.from(map.values()));
    showToast('success', `Added available sizes from ${preset.toUpperCase()} suite.`);
  };

  const handleToggleSizePill = (sizeTemplate: ProductSize) => {
    const existsIndex = formSizes.findIndex((s) => s.size === sizeTemplate.size);
    if (existsIndex > -1) {
      setFormSizes(formSizes.filter((_, idx) => idx !== existsIndex));
    } else {
      setFormSizes([...formSizes, { ...sizeTemplate, inStock: true }]);
    }
  };

  const handleToggleStockStatus = (index: number) => {
    const updated = [...formSizes];
    updated[index] = { ...updated[index], inStock: !updated[index].inStock };
    setFormSizes(updated);
  };

  const handleUpdateStockCount = (index: number, count: number) => {
    const updated = [...formSizes];
    updated[index] = { ...updated[index], stockCount: count };
    setFormSizes(updated);
  };

  const handleRemoveSize = (index: number) => {
    setFormSizes(formSizes.filter((_, idx) => idx !== index));
  };

  const handleAddCustomSize = () => {
    const clean = customSizeInput.trim();
    if (!clean) return;
    if (formSizes.some((s) => s.size.toLowerCase() === clean.toLowerCase())) {
      showToast('error', `Size "${clean}" already added!`);
      return;
    }
    const newSize: ProductSize = {
      size: clean,
      us: clean.startsWith('US') ? clean : `US ${clean}`,
      eu: clean.startsWith('EU') ? clean : `EU ${clean}`,
      inStock: true
    };
    setFormSizes([...formSizes, newSize]);
    setCustomSizeInput('');
    showToast('success', `Added size "${clean}" to product.`);
  };

  // Multi-Angle Image Upload to Firebase Storage
  const handleTriggerUpload = (colorwayIndex: number, angleKey: string = 'side') => {
    setSelectedCwForUpload(colorwayIndex);
    setSelectedAngleForUpload(angleKey);
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const angleKey = selectedAngleForUpload || 'side';
    const identifier = `${selectedCwForUpload}-${angleKey}`;
    setUploadingAngleIdentifier(identifier);
    setUploadingColorwayIndex(selectedCwForUpload);

    try {
      const slug = formName.toLowerCase().replace(/[^a-z0-9]/g, '-') || 'shoe';
      const downloadUrl = await uploadShoeImage(file, `${slug}-${angleKey}`);

      const updated = [...formColorways];
      const target = { ...updated[selectedCwForUpload] };
      const currentAngles = target.angles ? { ...target.angles } : {};
      (currentAngles as any)[angleKey] = downloadUrl;
      target.angles = currentAngles;

      // If side angle or no main image, set as primary image
      if (angleKey === 'side' || !target.image) {
        target.image = downloadUrl;
      }

      updated[selectedCwForUpload] = target;
      setFormColorways(updated);
      showToast('success', `${angleKey.toUpperCase()} angle photo uploaded to Firebase Storage!`);
    } catch (err: any) {
      console.error('Image upload failed:', err);
      showToast('error', `Image upload failed: ${err.message || 'Check storage permissions'}`);
    } finally {
      setUploadingAngleIdentifier(null);
      setUploadingColorwayIndex(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDeleteAngleImage = async (colorwayIndex: number, angleKey: string) => {
    const targetCw = formColorways[colorwayIndex];
    const url = (targetCw.angles as any)?.[angleKey] || (angleKey === 'side' ? targetCw.image : '');
    if (url) {
      try {
        await deleteShoeImageByUrl(url);
      } catch (e) {
        console.warn('File already deleted or unreferenced', e);
      }
      const updated = [...formColorways];
      const target = { ...updated[colorwayIndex] };
      if (target.angles) {
        const nextAngles = { ...target.angles };
        delete (nextAngles as any)[angleKey];
        target.angles = nextAngles;
      }
      if (angleKey === 'side' || target.image === url) {
        target.image = target.angles?.perspective || target.angles?.top || '';
      }
      updated[colorwayIndex] = target;
      setFormColorways(updated);
      showToast('success', `Removed ${angleKey} angle image.`);
    }
  };

  const handleUpdateAngleUrl = (colorwayIndex: number, angleKey: string, url: string) => {
    const updated = [...formColorways];
    const target = { ...updated[colorwayIndex] };
    const currentAngles = target.angles ? { ...target.angles } : {};
    if (url.trim()) {
      (currentAngles as any)[angleKey] = url.trim();
    } else {
      delete (currentAngles as any)[angleKey];
    }
    target.angles = currentAngles;
    if (angleKey === 'side' || !target.image) {
      target.image = url.trim();
    }
    updated[colorwayIndex] = target;
    setFormColorways(updated);
  };

  // Save Shoe (Create or Update)
  const handleSaveShoe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      showToast('error', 'Product name is required');
      return;
    }

    if (formSizes.length === 0) {
      showToast('error', 'Please select or add at least one available size');
      return;
    }

    setIsSaving(true);
    try {
      const slug = formName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const shoeId = editingProduct ? editingProduct.id : `${formGender}-${slug}-${Date.now()}`;

      const finalPrice = Number(formPriceCHF) || 18500;

      const productPayload: Product & { pricePKR?: number } = {
        id: shoeId,
        slug,
        name: formName.trim(),
        subCategory: formSubCategory.trim(),
        gender: formGender,
        activity: formActivity,
        cushioning: formCushioning,
        priceCHF: finalPrice,
        pricePKR: finalPrice,
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
          details: 'Engineered with sustainable bio-polymers'
        },
        rating: editingProduct?.rating || 4.9,
        reviewCount: editingProduct?.reviewCount || 1,
        colorways: formColorways,
        sizes: formSizes
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
                    const primaryImg = p.colorways[0]?.image || p.colorways[0]?.angles?.side;
                    const angleCount = p.colorways.reduce((sum, c) => {
                      const anglesPresent = c.angles
                        ? Object.values(c.angles).filter(Boolean).length
                        : (c.image ? 1 : 0);
                      return sum + anglesPresent;
                    }, 0);

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
                          Rs. {Math.round(p.priceCHF < 500 ? p.priceCHF * 100 : p.priceCHF).toLocaleString('en-PK')}
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
                          {angleCount > 0 ? (
                            <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" />
                              <span>{angleCount} angle photo{angleCount > 1 ? 's' : ''}</span>
                            </span>
                          ) : (
                            <span className="text-[11px] text-neutral-400">Vector CAD</span>
                          )}
                          <span className="text-[10px] text-neutral-400 block mt-0.5">
                            {p.sizes?.length || 0} size{p.sizes?.length === 1 ? '' : 's'}
                          </span>
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
                  <label className="block font-bold text-neutral-700 mb-1">Price (PKR / Rs.) *</label>
                  <input
                    type="number"
                    step="100"
                    required
                    value={formPriceCHF}
                    onChange={(e) => setFormPriceCHF(parseFloat(e.target.value))}
                    placeholder="e.g. 18500"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-black font-bold font-mono"
                  />
                  <p className="text-[10px] text-neutral-400 mt-0.5">Store currency is Pakistani Rupees (PKR)</p>
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

              {/* Multi-Angle Shoe Images by Colorway */}
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-sm text-neutral-900 flex items-center gap-1.5">
                      <Camera className="w-4 h-4 text-[#0CB581]" />
                      <span>Multi-Angle Shoe Images & Studio</span>
                    </h4>
                    <p className="text-[11px] text-neutral-500">
                      Upload photos from multiple angles (Side, 3/4 Dynamic, Top-Down, Sole, Front, Heel) to Firebase Storage. Customers can view all angles on the website.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormColorways([
                        ...formColorways,
                        {
                          id: `cw-${Date.now()}`,
                          name: `Colorway ${formColorways.length + 1}`,
                          primaryColorHex: '#E2E8F0',
                          accentColorHex: '#1E293B',
                          image: '',
                          angles: {
                            side: '',
                            perspective: '',
                            top: '',
                            sole: '',
                            front: '',
                            back: ''
                          }
                        }
                      ]);
                    }}
                    className="text-xs font-bold text-neutral-800 hover:text-black flex items-center gap-1 px-2.5 py-1.5 bg-neutral-100 hover:bg-neutral-200 rounded-lg cursor-pointer transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Colorway</span>
                  </button>
                </div>

                <div className="space-y-5">
                  {formColorways.map((cw, idx) => (
                    <div key={cw.id || idx} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-4">
                      {/* Colorway Header Controls */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-200">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
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
                              className="w-full p-2 bg-white border border-neutral-200 rounded text-xs font-semibold"
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

                        {formColorways.length > 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              setFormColorways(formColorways.filter((_, i) => i !== idx));
                            }}
                            className="text-red-600 hover:text-red-700 text-xs font-semibold flex items-center gap-1 self-start sm:self-center px-2 py-1 rounded hover:bg-red-50 cursor-pointer"
                            title="Delete this colorway"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove Colorway</span>
                          </button>
                        )}
                      </div>

                      {/* Multi-Angle Images Grid */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider flex items-center gap-1">
                            <Layers className="w-3.5 h-3.5 text-neutral-600" />
                            <span>Angles for {cw.name}:</span>
                          </span>
                          <span className="text-[10px] text-neutral-500">
                            Upload photos or paste URLs for each angle
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {ANGLE_KEYS.map((ang) => {
                            const angleImgUrl =
                              (cw.angles as any)?.[ang.id] ||
                              (ang.id === 'side' ? cw.image : '');
                            const isThisUploading =
                              uploadingAngleIdentifier === `${idx}-${ang.id}`;

                            return (
                              <div
                                key={ang.id}
                                className="p-2.5 bg-white rounded-lg border border-neutral-200/90 shadow-2xs space-y-2"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <div className="flex items-center gap-1.5">
                                      <span className="font-bold text-neutral-900 text-[11px]">
                                        {ang.label}
                                      </span>
                                      {ang.id === 'side' && (
                                        <span className="px-1.5 py-0.2 bg-emerald-100 text-emerald-800 text-[9px] font-bold rounded">
                                          Main
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[10px] text-neutral-400 leading-tight">
                                      {ang.desc}
                                    </p>
                                  </div>

                                  {angleImgUrl && (
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1" title="Image active" />
                                  )}
                                </div>

                                {/* Preview and Upload Box */}
                                <div className="flex items-center gap-2">
                                  <div className="w-14 h-14 bg-neutral-50 rounded-lg border border-neutral-200 flex items-center justify-center overflow-hidden shrink-0">
                                    {angleImgUrl ? (
                                      <img
                                        src={angleImgUrl}
                                        alt={ang.label}
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <span className="text-[8px] font-bold text-neutral-300 text-center px-1">
                                        No Image
                                      </span>
                                    )}
                                  </div>

                                  <div className="flex-1 space-y-1.5 min-w-0">
                                    <div className="flex items-center gap-1.5">
                                      <button
                                        type="button"
                                        disabled={isThisUploading}
                                        onClick={() => handleTriggerUpload(idx, ang.id)}
                                        className="px-2.5 py-1 bg-neutral-900 hover:bg-black text-white rounded text-[10px] font-bold flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                                      >
                                        {isThisUploading ? (
                                          <>
                                            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Uploading...</span>
                                          </>
                                        ) : (
                                          <>
                                            <Upload className="w-3 h-3 text-[#0CB581]" />
                                            <span>{angleImgUrl ? 'Replace' : 'Upload'}</span>
                                          </>
                                        )}
                                      </button>

                                      {angleImgUrl && (
                                        <button
                                          type="button"
                                          onClick={() => handleDeleteAngleImage(idx, ang.id)}
                                          className="p-1 text-red-600 hover:bg-red-50 rounded border border-red-200 cursor-pointer"
                                          title={`Remove ${ang.label} image`}
                                        >
                                          <Trash2 className="w-3 h-3" />
                                        </button>
                                      )}
                                    </div>

                                    {/* URL Input */}
                                    <input
                                      type="text"
                                      value={angleImgUrl}
                                      onChange={(e) => handleUpdateAngleUrl(idx, ang.id, e.target.value)}
                                      placeholder="Or paste image URL"
                                      className="w-full text-[10px] p-1 bg-neutral-50 border border-neutral-200 rounded font-mono truncate focus:outline-none focus:border-black"
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ======================================================== */}
              {/* AVAILABLE SHOE SIZES & STOCK MANAGEMENT                  */}
              {/* ======================================================== */}
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-extrabold text-sm text-neutral-900 flex items-center gap-1.5">
                      <Ruler className="w-4 h-4 text-[#0CB581]" />
                      <span>Available Shoe Sizes & Stock Management</span>
                    </h4>
                    <p className="text-[11px] text-neutral-500">
                      Configure all available sizes for this shoe model. Only configured and in-stock sizes can be purchased by customers.
                    </p>
                  </div>

                  <span className="text-[11px] font-bold px-2.5 py-1 bg-neutral-100 rounded-full text-neutral-700 self-start sm:self-auto tabular-nums">
                    {formSizes.length} size{formSizes.length === 1 ? '' : 's'} active ({formSizes.filter(s => s.inStock).length} in stock)
                  </span>
                </div>

                {/* Quick Size Suite Preset Buttons */}
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                    One-Click Size Suites:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleAddAllSizesPreset('men')}
                      className="px-2.5 py-1 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-800 transition-colors cursor-pointer"
                    >
                      + All Men's Sizes (US 7 – 14)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddAllSizesPreset('women')}
                      className="px-2.5 py-1 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-800 transition-colors cursor-pointer"
                    >
                      + All Women's Sizes (US 5 – 11)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddAllSizesPreset('eu')}
                      className="px-2.5 py-1 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-800 transition-colors cursor-pointer"
                    >
                      + All EU Sizes (38 – 46)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddAllSizesPreset('kids')}
                      className="px-2.5 py-1 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-800 transition-colors cursor-pointer"
                    >
                      + All Kids' Sizes (EU 28 – 38)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddAllSizesPreset('all')}
                      className="px-2.5 py-1 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-800 transition-colors cursor-pointer"
                    >
                      + Select All (Full Run)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSizes(formSizes.map(s => ({ ...s, inStock: true })));
                        showToast('success', 'Marked all sizes in stock.');
                      }}
                      className="px-2.5 py-1 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-semibold text-emerald-700 transition-colors cursor-pointer"
                    >
                      Mark All In Stock
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSizes([]);
                        showToast('success', 'Cleared all sizes.');
                      }}
                      className="px-2.5 py-1 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-semibold text-red-600 transition-colors cursor-pointer ml-auto"
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                {/* Quick Toggle Standard Size Pills */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                    Quick Toggle Standard Sizes (Click to add / remove):
                  </span>
                  <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto p-2 bg-white rounded-lg border border-neutral-200">
                    {(formGender === 'women'
                      ? WOMEN_STANDARD_SIZES
                      : formGender === 'kids'
                      ? KIDS_STANDARD_SIZES
                      : MEN_STANDARD_SIZES
                    ).map((tpl) => {
                      const isActive = formSizes.some((s) => s.size === tpl.size);
                      return (
                        <button
                          key={tpl.size}
                          type="button"
                          onClick={() => handleToggleSizePill(tpl)}
                          className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer border ${
                            isActive
                              ? 'bg-neutral-900 text-white border-black shadow-2xs'
                              : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-black hover:bg-white'
                          }`}
                        >
                          {isActive && <span className="mr-1">✓</span>}
                          <span>{tpl.size}</span>
                          <span className="text-[9px] opacity-60 ml-1">({tpl.eu})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Add Custom Size Input */}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={customSizeInput}
                    onChange={(e) => setCustomSizeInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddCustomSize();
                      }
                    }}
                    placeholder="Enter custom size (e.g. US 15, EU 49, UK 10.5, 42.5 Wide)"
                    className="flex-1 p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs focus:outline-none focus:border-black"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomSize}
                    className="px-3 py-2 bg-neutral-900 hover:bg-black text-white rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer shrink-0 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Size</span>
                  </button>
                </div>

                {/* Active Sizes Grid & Stock Toggles */}
                {formSizes.length === 0 ? (
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-xs text-center font-medium">
                    No sizes selected yet. Use the preset suites above or click standard size pills to add available sizes.
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-60 overflow-y-auto p-2 bg-neutral-50 rounded-xl border border-neutral-200">
                    {formSizes.map((s, sIdx) => (
                      <div
                        key={s.size || sIdx}
                        className={`p-2 rounded-lg border text-xs flex flex-col justify-between gap-1.5 transition-all ${
                          s.inStock
                            ? 'bg-white border-neutral-200 shadow-2xs'
                            : 'bg-neutral-100 border-neutral-200 opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-bold text-neutral-900 block">{s.size}</span>
                            <span className="text-[10px] text-neutral-400 font-mono">{s.eu || s.us}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveSize(sIdx)}
                            className="p-1 text-neutral-400 hover:text-red-600 rounded hover:bg-neutral-100 cursor-pointer"
                            title="Remove size"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between gap-1 pt-1 border-t border-neutral-100">
                          {/* Stock Toggle Button */}
                          <button
                            type="button"
                            onClick={() => handleToggleStockStatus(sIdx)}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                              s.inStock
                                ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                : 'bg-neutral-200 text-neutral-600 hover:bg-neutral-300'
                            }`}
                          >
                            {s.inStock ? 'In Stock' : 'Out of Stock'}
                          </button>

                          {/* Stock Count */}
                          <input
                            type="number"
                            min="0"
                            value={s.stockCount ?? ''}
                            onChange={(e) => handleUpdateStockCount(sIdx, parseInt(e.target.value) || 0)}
                            placeholder="Qty"
                            className="w-12 p-0.5 text-[10px] text-right font-mono bg-neutral-50 border border-neutral-200 rounded focus:outline-none focus:border-black"
                            title="Optional stock count"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
