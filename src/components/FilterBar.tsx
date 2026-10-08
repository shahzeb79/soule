import React from 'react';
import { Activity, Cushioning, FilterState } from '../types';
import { SlidersHorizontal, Grid2X2, Grid3X3, LayoutGrid, RotateCcw, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  filterState: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  totalResults: number;
  gridCols: 2 | 3 | 4;
  onGridColsChange: (cols: 2 | 3 | 4) => void;
  onResetFilters: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filterState,
  onFilterChange,
  totalResults,
  gridCols,
  onGridColsChange,
  onResetFilters
}) => {
  const activities: Activity[] = [
    'Road Running',
    'Trail Running',
    'All Day',
    'Speed & Racing',
    'Hiking & Trekking'
  ];

  const cushioningLevels: Cushioning[] = ['Plush', 'Max', 'Responsive', 'Ultralight'];

  const toggleActivity = (activity: Activity) => {
    const exists = filterState.activity.includes(activity);
    const updated = exists
      ? filterState.activity.filter((a) => a !== activity)
      : [...filterState.activity, activity];
    onFilterChange({ activity: updated });
  };

  const toggleCushioning = (cush: Cushioning) => {
    const exists = filterState.cushioning.includes(cush);
    const updated = exists
      ? filterState.cushioning.filter((c) => c !== cush)
      : [...filterState.cushioning, cush];
    onFilterChange({ cushioning: updated });
  };

  const hasActiveFilters =
    filterState.activity.length > 0 ||
    filterState.cushioning.length > 0 ||
    filterState.inStockOnly;

  return (
    <div className="sticky top-16 z-30 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-neutral-200 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        {/* Top line: Results count, Activity filters, and Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left: Count & In-Stock toggle */}
          <div className="flex items-center gap-4">
            <span className="text-xs sm:text-sm font-semibold text-neutral-900 tracking-tight">
              Showing <span className="tabular-nums font-bold">{totalResults}</span> styles
            </span>

            {hasActiveFilters && (
              <button
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-black font-medium transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Right: Grid switcher & Sort Dropdown */}
          <div className="flex items-center gap-3">
            {/* Grid layout toggle (Desktop) */}
            <div className="hidden lg:flex items-center bg-white border border-neutral-200 rounded-lg p-0.5 shadow-2xs">
              <button
                onClick={() => onGridColsChange(2)}
                className={`p-1.5 rounded transition-colors ${
                  gridCols === 2 ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="2 Columns (Detail View)"
              >
                <Grid2X2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onGridColsChange(3)}
                className={`p-1.5 rounded transition-colors ${
                  gridCols === 3 ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="3 Columns (Standard Grid)"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onGridColsChange(4)}
                className={`p-1.5 rounded transition-colors ${
                  gridCols === 4 ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="4 Columns (Compact Grid)"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sort Select */}
            <div className="relative inline-block">
              <select
                value={filterState.sort}
                onChange={(e) =>
                  onFilterChange({
                    sort: e.target.value as FilterState['sort']
                  })
                }
                className="appearance-none bg-white text-xs font-semibold text-neutral-800 border border-neutral-200 rounded-lg pl-3 pr-8 py-2 hover:border-black focus:outline-none cursor-pointer shadow-2xs"
              >
                <option value="featured">Sort: Featured</option>
                <option value="newest">Sort: Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom line: Activity & Cushioning Filter Buttons (clean segmented interactive controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider shrink-0 mr-1">
            Activity:
          </span>
          {activities.map((act) => {
            const active = filterState.activity.includes(act);
            return (
              <button
                key={act}
                onClick={() => toggleActivity(act)}
                className={`px-3 py-1.5 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer border ${
                  active
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-2xs'
                    : 'bg-white text-neutral-700 border-neutral-200/90 hover:border-neutral-400'
                }`}
              >
                {act}
              </button>
            );
          })}

          <div className="h-4 w-px bg-neutral-200 mx-1 shrink-0" />

          <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider shrink-0 mr-1">
            Cushion:
          </span>
          {cushioningLevels.map((cush) => {
            const active = filterState.cushioning.includes(cush);
            return (
              <button
                key={cush}
                onClick={() => toggleCushioning(cush)}
                className={`px-3 py-1.5 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer border ${
                  active
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-2xs'
                    : 'bg-white text-neutral-700 border-neutral-200/90 hover:border-neutral-400'
                }`}
              >
                {cush}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
