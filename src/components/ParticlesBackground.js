//import Particles from "react-tsparticles";
//import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
//import { useCallback, useMemo } from "react";
import ParticlesConfig from "./config/ParticlesConfig";

const ParticlesBackground = () => {
    return (
        <particles params={ParticlesConfig}>
        </particles>
    )
}

export default ParticlesBackground