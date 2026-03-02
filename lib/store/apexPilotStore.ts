import create from 'zustand';

interface ApexPilotState {
    query: string;
    intent: string;
    isError: boolean;
    setQuery: (query: string) => void;
    parseIntent: (intent: string) => void;
    navigate: (destination: string) => void;
    setError: (errorState: boolean) => void;
}

const useApexPilotStore = create<ApexPilotState>((set) => ({
    query: '',
    intent: '',
    isError: false,
    setQuery: (query) => set({ query }),
    parseIntent: (intent) => set({ intent }),
    navigate: (destination) => {
        // Implement navigation logic here
    },
    setError: (errorState) => set({ isError: errorState }),
}));

export default useApexPilotStore;