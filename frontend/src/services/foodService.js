import { sample__foods, sample__tags } from "../data";

export const getAll = async () => sample__foods;

export const search = async searchTerm =>
    sample__foods.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

export const getAllTags = async () => sample__tags;

export const getAllByTag = async tag => {
    if (tag === 'All') return getAll();
    return sample__foods.filter(item => item.tags?.includes(tag));
}

export const getById = async foodId => 
    sample__foods.find(item => item.id === foodId);
