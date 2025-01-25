import { DEFAULT_PROJECT_COLOR } from '@/constants/colors';
import { create } from 'zustand'

type NewProjectStore = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;  
  resetSelectedColor: () => void;
}
const useNewProjectStore = create<NewProjectStore>((set) => ({
  selectedColor: DEFAULT_PROJECT_COLOR,
  setSelectedColor: (color: string) => set({ selectedColor: color }),
  resetSelectedColor: () => set({ selectedColor: DEFAULT_PROJECT_COLOR }),
}))

export default useNewProjectStore;