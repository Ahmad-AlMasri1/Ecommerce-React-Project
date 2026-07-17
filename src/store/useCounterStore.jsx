import { create } from 'zustand';

const useCounterStore = create(() => ({
  counter: 0,
  increment:()=>{
    set((state)=>({counter:state.counter+1}))
  }
}));