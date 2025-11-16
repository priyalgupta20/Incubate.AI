import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const Background = () => {
    // 1. Particle Engine Initialization (No Change)
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    // 2. Configuration Options - UPDATED FOR COLOR AND INTERACTIVITY
    const options = useMemo(() => ({
        // --- General Settings ---
        fullScreen: { 
            enable: true, 
            zIndex: -1 
        },
        background: {
            color: {
                value: "#120033", 
            },
        },
        detectRetina: true,

        // --- Particle (Node) Settings ---
        particles: {
            number: {
                value: 60, 
                density: { enable: true, value_area: 800 }
            },
            color: {
                // UPDATED: Bright, contrast-y colors on the dark purple background
                // Colors are White, Neon Purple, and Light Pink for visibility
                value: ["#ffffff", "#aa00ff", "#ffc0cb"], 
            },
            shape: {
                type: ["circle"], 
            },
            opacity: {
                value: 0.8, 
                anim: { enable: true, speed: 0.5, opacity_min: 0.5, sync: false },
            },
            size: { value: 3, random: true },
            links: {
                enable: true,
                distance: 140,
                // Links ko Light Purple kar diya hai taaki woh dark background par dikhein
                color: "#aa00ff", 
                opacity: 0.6,
                width: 1,
                triangles: { enable: true, color: "#2f0a4f", opacity: 0.02 }, 
            },
            move: {
                enable: true,
                speed: 1, 
                out_mode: "bounce",
                bounce: true,
            },
        },

        // --- Interactive Effects (on Hover and Click) ---
        interactivity: {
            events: {
                onHover: {
                    // Grab aur attract rakha hai
                    mode: ["grab", "attract"], 
                    enable: true,
                },
                onClick: {
                    mode: ["push", "bubble"],
                    enable: true,
                },
                resize: true,
            },
            modes: {
                // 1. Grab: Connection Highlight (Increased distance for better touch response)
                grab: {
                    // Distance 200 kar di (mouse/touch thoda door hone par bhi link karega)
                    distance: 200, 
                    links: { opacity: 1, color: "#ffffff", width: 2 }, // White, thicker links for focus
                },
                // 2. Attract: Data Flow Pull (Increased distance and power for better response)
                attract: {
                    // Distance 400 aur factor 15, jisse effect door se aur zor se ho
                    distance: 400, duration: 0.6, factor: 15, speed: 1,
                },
                // 3. Bubble: Clickable Surge (Thoda bada effect)
                bubble: {
                    distance: 200, size: 15, duration: 2, opacity: 0.8,
                },
                // 4. Push: No change
                push: { quantity: 4 },
            },
        },
        
        // Emitters (Lightning) removed
        emitters: [], 
    }), []);

    return (
        <div className="techno-bg-container">
            <Particles
                id="tsparticles-techno-background"
                init={particlesInit}
                options={options}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default Background;