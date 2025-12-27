export interface Game {
    title: string;
    image: string;
    slug: string;
    dateRange: string;
    technologies: string[];
    installer?: string; // Optional installer download link
}

export const professionalGames: Game[] = [
    {
        title: "Raskulls",
        image: "/images/RaskullsBanner.png",
        slug: "raskulls",
        dateRange: "2025 - Current",
        technologies: ["UNITY", "C#", "Photon Fusion"]
    },
    {
        title: "Fruit Ninja Classic+",
        image: "/images/FruitNinjaClassic.png",
        slug: "fruit-ninja-classic",
        dateRange: "2022 - 2025",
        technologies: ["UNITY", "C#"]
    }
];

export const personalGames: Game[] = [
    {
        title: "Renegade 17",
        image: "/images/Renegade17Banner.png",
        slug: "renegade-17",
        dateRange: "2022",
        technologies: ["Unreal Engine", "Blueprints"]
    },
    {
        title: "Dr. Malware",
        image: "/images/DrMalware.png",
        slug: "dr-malware",
        dateRange: "2025",
        technologies: ["Vulkan", "C++", "EnTT", "IMGUI"],
        installer: "/downloads/dr-malware-installer.exe"
    },
    {
        title: "Fluxuate",
        image: "/images/FluxtuateBanner.png",
        slug: "fluxuate",
        dateRange: "2025",
        technologies: ["Unreal Engine", "C++"]
    },
    {
        title: "Forgotten Arsenal",
        image: "/images/ForgottenArsenalBanner.png",
        slug: "forgotten-arsenal",
        dateRange: "2025",
        technologies: ["UNITY", "C#"]
    }
];

export const gamesData = {
  'fruit-ninja-classic': {
    title: 'Fruit Ninja Classic+',
    tech: 'Unity, C#',
    description: 'A remake of the classic mobile game Fruit Ninja with added features and enhancements.',
    image: '/images/FruitNinjaClassic.png',
    stores: [
      { type: 'appstore' as const, link: 'https://apps.apple.com/us/app/fruit-ninja-classic/id362949845?itscg=30200&itsct=apps_box_link&mttnsubad=362949845' },
      { type: 'googleplay' as const, link: 'https://play.google.com/store/apps/details?id=com.halfbrick.fruitninja&pcampaignid=web_share'}
    ],
    installer: null,
    installerBadge: null,
    fullDescription: 'Fruit Ninja Classic+ is a faithful recreation of the beloved mobile game with modern enhancements. Built in Unity, this project focuses on responsive touch controls, satisfying physics, and polished visual effects. Features include multiple game modes, combo systems, and unlockable blade powers.',
    roleScope: {
      role: 'Gameplay Programmer / Game Designer',
      teamSize: '7',
      platform: 'iOS/Android',
      duration: '2 years',
      status: 'Shipped & Live'
    },
    contributions: [
      { 
            category: 'Gameplay Systems & Mechanics',
            items:  
            [ 
            'Designed and implemented new blade powers using C#, integrating activation logic, cooldowns, effects, and scoring modifiers.',
            'Extended existing core slicing systems to support new gameplay mechanics without disrupting legacy behavior.',
            'Refactored gameplay logic to improve readability, extensibility, and bug isolation.'
            ]
      },
      { 
            category: 'Live Ops & Events',
            items: 
            [
            'Designed and implemented monthly live events for Apple Arcade, including event logic, progression tracking, and reward delivery.',
            "Supported live operations by hot-fixing issues and validating event behavior across release cycles."
            ]
      },
      {
            category: 'Systems Integration & Tools',
            items: 
            [
            'Diagnosed and resolved daily gameplay bugs across input handling, scoring, progression, and UI integration.',
            'Collaborated cross-discipline to ensure art, audio, and UI systems were correctly triggered by gameplay events.',
            'Maintained gameplay systems across multiple Apple Arcade updates, ensuring long-term stability of a live product.'
            ]
      },
      {
            category: "Cross Discipline Collaboration",
            items:
            [
            'Worked closely with artists and sound designers to ensure gameplay systems correctly triggered VFX, SFX, and UI feedback.',
            'Participated in design discussions with a programmer mindset, helping scope features to be technically feasible and performant.',
            'Communicated implementation tradeoffs clearly to stakeholders during event planning and feature reviews.'
            ]
      }
    ]
  },

  'raskulls': {
    title: 'Raskulls',
    tech: 'Unity, C#, Photon Fusion',
    description: 'A remake of the arcade-style game Raskulls, reimagined to fit mobile platforms.',
    image: '/images/RaskullsBanner.png',
    stores: [],
    installer: null,
    installerBadge: null,
    fullDescription: 'Raskulls is a remake of the Xbox 360 Arcade game with enhanced graphics and gameplay mechanics. Developed in Unity, this project emphasizes fast-paced action, strategic power-ups, and multiplayer modes for competitive fun.',
    roleScope: {
      role: 'Gameplay Programmer / Team Lead',
      teamSize: '4',
      platform: 'Mobile',
      duration: 'Ongoing (1 year+)',
      status: 'In Development'
    },
    contributions: [
      { 
            category: 'Gameplay Systems & Engine Migration',
            items:
            [
            'Led the porting of core gameplay systems from a custom engine to Unity, preserving game feel and behavior.',
            'Reimplemented core gameplay logic in C#',
            'Refactored gameplay code to align with Unity’s systems, improving maintainability and iteration speed.'
            ]
      },
      { 
            category: 'Technical Leadership & Ownership',
            items:
            [
            'Served as technical lead for a small team of gameplay programmers during the porting process.',
            'Owned technical decision-making for gameplay systems, balancing fidelity, performance, and development velocity.',
            'Broke down large migration tasks into actionable work items and assigned ownership.',
            'Reviewed gameplay code and provided technical guidance to ensure consistency and code quality.',
            'Acted as the primary point of contact for gameplay-related technical questions and blockers.'
            ]
      },
      { 
            category: 'Gameplay Implementation & Iteration',
            items:
            [
            'Implemented gameplay features directly into the Unity codebase.',
            'Iterated on gameplay mechanics based on internal feedback and testing results.'
            ]
      }
    ]
  },

  'renegade-17': {
    title: 'Renegade 17',
    tech: 'Unreal Engine, Blueprints',
    description: 'A fast-paced FPS game built in Unreal Engine focusing on phsyics puzzles and singleplayer combat.',
    image: '/images/Renegade17Banner.png',
    stores: [
      { type: 'itch' as const, link: 'https://kitsuneneko29.itch.io/renegade17' }
    ],
    installer: null,
    installerBadge: null,
    fullDescription: 'Renegade 17 is a singleplayer FPS game that combines fast-paced combat with physics-based puzzles. Built in Unreal Engine using Blueprints, the game features a variety of weapons, enemy types, and environmental challenges that require both reflexes and problem-solving skills.',
    roleScope:{
      role: 'Gameplay Programmer / Level Designer',
      teamSize: '7',
      platform: 'PC',
      duration: '6 months',
      status: 'Released'
    },
    contributions: [
      { 
            category: 'Gameplay Scripting & Systems Implementation',
            items:
            [
            'Scripted 20+ gameplay events and mechanics using Unreal Engine 4 Blueprints.',
            'Implemented combat encounters, triggers, scripted sequences, and progression beats.',
            'Iterated on gameplay scripts based on playtesting to improve pacing, clarity, and challenge.'
            ]
      },
      { 
            category: 'Level Design & Player Experience',
            items:
            [
            'Designed and implemented the level “High Rise” from concept to playable final.',
            'Applied IPM (Introduce, Practice, Master) methodology to teach and reinforce gameplay mechanics.',
            'Developed level layouts using 2D maps, beat charts, mood boards, and blockmesh passes.',
            'Balanced combat encounters, traversal, and sightlines to support intended player flow.',
            'Collaborated with teammates to align level design with overall game tone and mechanics.'
            ]
      }
    ]
  },

  'fluxuate': {
    title: 'Fluxuate',
    tech: 'Unreal Engine, C++, Blueprints',
    description: 'A physics based hack-and-slash in early development.',
    image: '/images/FluxtuateBanner.png',
    stores: [
      {type: 'itch' as const, link: 'https://pocketchangegames2512.itch.io/fluxuate' }
    ],
    installer: null,
    installerBadge: null,
    fullDescription: 'Fluxuate is an early-stage hack-and-slash game that emphasizes fluid combat and physics-based interactions. Developed in Unreal Engine using a combination of C++ and Blueprints, the game aims to deliver a dynamic and engaging gameplay experience.',
    roleScope:{
      role: 'Gameplay Programmer / Systems Architect',
      teamSize: '3',
      platform: 'PC',
      duration: 'Ongoing (1 month)',
      status: 'In Development'
    },
    contributions: [
      {
            category: 'Core Gameplay & Combat',
            items:
            [
            'Implemented player melee combat system, including animation-driven attacks and line trace–based hit detection to ensure precise and responsive combat.',
            'Integrated animation notifies to synchronize damage application with melee impact frames.',
            'Developed enemy damage handling logic to ensure damage is applied only on valid hit confirmation.',
            'Added target selection and highlighting system to improve player readability during combat and casting.'
            ]
      },
      { 
            category: 'AI, Navigation & Animation',
            items:
            [
            'Implemented enemy AI navigation using Unreal’s NavMesh system, enabling reliable pathfinding and world traversal.',
            'Authored and updated enemy animation blueprints, including idle, movement, and attack states driven by velocity and direction variables.',
            'Integrated player and enemy skeletal meshes and animation assets, ensuring correct retargeting and gameplay compatibility.',
            'Updated animation systems to support weapon-based combat (sword integration).'
            ]
      },
      { 
            category: 'Audio Systems',
            items:
            [
            'Designed and implemented audio systems, including souDesigned and implemented a modular audio subsystem in C++ to manage Main Menu Music, Gameplay Music, and Pause Menu Audio.',
            'Created persistent audio settings system, allowing players to adjust music and SFX volume with values saved between sessions.',
            'Implemented looping audio tracks for menus and gameplay states, ensuring seamless transitions.',
            'Connected audio settings to UI sliders with real-time feedback.'
            ]
      },
      {
            category: 'UI Systems & Game Flow',
            items:
            [
            'Built a fully functional Main Menu system including Play, Settings, and Quit options.',
            'Implemnted Pause Menu functionality, allowing players to pause/resume gameplay, adjust settings, and return to the main menu.'
            ]
      },
      { 
            category: 'Engine Architecture & Debugging',
            items:
            [
            'Authored multiple custom Unreal Engine C++ subsystems to manage audio, music, and persistent settings cleanly and modularly.',
            'Debugged and resolved build errors and broken asset references using Perforce changelists and Unreal logs.'
            ]
      }
    ]
  },

  'forgotten-arsenal': {
    title: 'Forgotten Arsenal',
    tech: 'Unity, C#',
    description: "A first-person shooter focused on elemental weapons and fast-paced combat.",
    image: '/images/ForgottenArsenalBanner.png',
    stores: [
      { type: 'itch' as const, link: 'https://noahspann.itch.io/forgotten-arsenal' }
    ],
    installer: null,
    installerBadge: null,
    fullDescription: 'Forgotten Arsenal is a first-person shooter that emphasizes fast-paced combat and elemental weaponry. Developed in Unity, the game features a variety of ammo types with unique effects.',
    roleScope:{
        role: 'Gameplay Programmer',
        teamSize: '3',
        platform: 'PC',
        duration: '1 month',
        status: 'Released',
    },
    contributions: [
      { 
            category: 'Core Gameplay & Combat Systems',
            items:
            [
            'Implemented a modular weapon system, supporting multiple ammo types with unique behaviors, recoil patterns, ammo consumption, and damage.',
            'Designed and implemented weapon overheat and cooldown mechanics, including HUD feedback and gameplay tuning.',
            'Developed ammo inventory and stacking systems, enabling upgrades, pickups, and UI-driven ammo management.',
            'Implemented damage handling pipeline, supporting different damage types and contextual enemy reactions.'
            ]
      },
      {
            category: 'Enemy AI & Behavior',
            items:
            [
            'Implemented multiple enemy types including giant spiders, nightcrawlers, and a flying wraith',
            'Integrated animation events to synchronize enemy attacks, damage windows, and death behaviors.',
            'Developed enemy health systems, including enemy health bars and visual feedback on damage.'
            ]
      },
      { 
            category: 'Player Interaction & World Systems',
            items:
            [
            'Implemented interactable systems using interfaces, enabling scalable interactions such as doors, power boxes, pickups, and portals.',
            'Developed portal-based scene transitions, including fixes for player positioning and fall-through edge cases.',
            'Added traversal mechanics such as jump pads, reward platforms, and environmental hazards.',
            'Implemented destructible environment elements, including frozen breakable walls.'
            ]
      },
      {
            category: 'Audio & Narrative Systems',
            items:
            [
            'Implemented a dialogue and voice line manager, supporting multiple voice lines and skip functionality.'
            ]
      },
      { 
            category: 'Level Design & World Building',
            items:
            [
            'Responsible for Level 1 in its entirety, including layout, enemy placement, pacing, and environmental storytelling.',
            'Implemented cutscenes using Unity’s Cinemachine, coordinating animations, camera movements, and audio cues.'
            ]
      }
    ]
  },

  'dr-malware': {
    title: 'Dr. Malware',
    tech: 'Vulkan, C++, EnTT, IMGUI',
    description: 'A data-oriented arcade game made with Vulkan, EnTT, Gateware, IMGUI to challenge myself into not using a commercial engine.',
    image: '/images/DrMalware.png',
    stores: null,
    installer: '/downloads/dr-malware-installer.exe',
    installerBadge: '/images/dr-malware-installer-badge.png',
    fullDescription: 'Dr. Malware is a fast-paced arcade game where you play as a doctor fighting against malicious viruses. Built entirely from scratch using Vulkan for rendering, EnTT for entity component system architecture, and IMGUI for menus and text. This project challenged me to work without a commercial engine and implement core game systems from the ground up.',
    roleScope:{
        role: 'Graphics Programmer / UI Programmer',
        teamSize: '5',
        platform: 'PC',
        duration: '1 month',
        status: 'Finished'
    },
    contributions:[
        {
            category: "UI Architecture & Systems",
            items:
            [
                'Architected the games UI framework, designing a modular, scalable system to support in-game menus.',
                'Implemented a centralized UI manager to handle input routing and control flow between different UI states.',
                'Set up events for UI interactions, enabling responsive feedback and seamless transitions.'
            ]
        },
        { 
            category: 'IMGUI Integration',
            items:
            [
                'Integrated IMGUI into the engine to support rapid UI development and iteration.',
                'Designed the Main Menu',
                'Ensured IMGUI was properly synchronized with the engines render loop.'
            ]
        },
        {
            category: 'Rendering & Engine Integration',
            items:
            [
                'Integrated UI rendering into a Vulkan-based rendering pipeline.',
                'Worked with Vulkan buffers and rendering systems to support UI rendering without impacting core gameplay rendering.'
            ]
        }
    ]
}
  // Add more games here as needed
};
