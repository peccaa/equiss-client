import { create } from 'zustand';
import {ProjectQueryParams} from "@/types/project";

const initialState: Omit<ProjectQueryParams, 'projectType' | 'approved'> = {
    query: '',
    page: 0,
    size: 20,
    sort: '',
    priority: null,
    locationId: null,
    categoryId: null,
    nscodeId: null,
    buildingId: null,
    startPlan: new Date().getFullYear(),
    endPlan: new Date().getFullYear() + 4,
    projectYear: new Date().getFullYear(),
};

type ProjectFilterStoreState = {
    filters: Omit<ProjectQueryParams, 'projectType' | 'approved'>;
    setFilters: (filters: Partial<Omit<ProjectQueryParams, 'projectType' | 'approved'>>) => void;
    resetLtmFilters: () => void;
    resetPvlFilters: () => void;
    resetStandardFilters: () => void;
};

export const useProjectFilterStore = create<ProjectFilterStoreState>((set) => ({
    filters: initialState,
    setFilters: (filters) =>
        set((state) => ({
            filters: { ...state.filters, ...filters },
        })),
    resetLtmFilters: () =>
        set({
            filters: {
                ...initialState,
                startPlan: new Date().getFullYear(),
                endPlan: new Date().getFullYear() + 4,
            },
        }),
    resetPvlFilters: () =>
        set({
            filters: {
                ...initialState,
                projectYear: new Date().getFullYear(),
            },
        }),
    resetStandardFilters: () =>
        set({
            filters: {
                ...initialState,
                projectYear: new Date().getFullYear(),
            },
        }),
}));