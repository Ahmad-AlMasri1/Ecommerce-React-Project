import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import useThemeStore from "./store/useThemeStore";
import { colors } from "@mui/material";

export default function StarsBackground() {
  const init = async (engine) => await loadStarsPreset(engine);
  const mode = useThemeStore((state) => state.mode);  
  return (
    <Particles 
      init={init} 
      options={{ preset: "stars", background: { color: "transparent"  } , particles: {
      color: { value: mode === 'light' ? "#0000" : "#FFFF" } 
    } }}
      style={{ position: "absolute", zIndex: -10 , top: 0, left: 0, width: "100%", height: "100%",pointerEvents:'none' }} 
    />
  );
}