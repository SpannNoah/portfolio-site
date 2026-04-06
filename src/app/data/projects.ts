export interface ProjectSection {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
    blogLink?: {
        href: string;
        text: string;
    };
}

export interface Project {
    title: string;
    image: string;
    slug: string;
    technologies: string[];
    about?: string;
    implementationDetails?: string;
    lessonsLearned?: string;
    link?: string;
    sections?: ProjectSection[];
    keyImpact?: string[];
}

export const projects: Project[] = [
    {
        title: 'Gateware',
        image: '/images/GatewareLogo.webp',
        slug: 'gateware-open-source',
        technologies: ['C++', 'Vulkan', 'Unit Testing', 'Cross-Platform'],
        link: "https://gitlab.com/gateware-development/gateware",
        about:
            'Contributed to the open-source Gateware project, working across engine-level math systems, collision detection, and Vulkan graphics debugging. This work emphasized low-level problem solving, cross-platform correctness, and test-driven development.',
        sections: [
            {
                heading: 'Collision & Math Systems',
                paragraphs: [
                    'Implemented functionality to generate Oriented Bounding Boxes (OBBs) from transforms, including center, rotation, and extents. This work leveraged existing math utilities while ensuring correctness through comprehensive unit tests (identity, translation, rotation, non-uniform scale, and edge cases).',
                    'Expanded into OBB–OBB collision using the Separating Axis Theorem (SAT), where I debugged and corrected issues in an existing implementation to properly compute minimum penetration distance. This involved fixing flawed comparison logic and investigating numerical stability challenges such as epsilon inflation causing false positives after separation.'
                ],
                blogLink: {
                    href: 'https://fsgateware.blogspot.com/2026/01/month-1-part-1-implementing.html',
                    text: 'Read more on my blog'
                }
            },
            {
                heading: 'Vulkan Debugging & Validation Fixes',
                paragraphs: [
                    'Investigated and resolved multiple Vulkan validation errors related to API version mismatches between SDKs, drivers, and validation layers. Identified that feature structs were being chained based on the driver-supported version rather than the intended target version.',
                    'Implemented a fix that:'
                ],
                bullets: [
                    'Queries device-supported API version',
                    'Clamps against the requested version',
                    'Gates feature struct chaining accordingly'
                ],
            },
            {
                heading: 'Validation Layer Edge Cases & Compatibility',
                paragraphs: [
                    'Diagnosed additional Vulkan validation issues caused by inconsistencies between compile-time API definitions and runtime validation layers. Addressed feature conflicts (e.g., descriptor indexing with Vulkan 1.2 feature structs) using version-aware preprocessor guards.',
                    'Reproduced user-reported issues via targeted test cases that mimicked specific hardware and SDK configurations, ensuring fixes were verifiable and robust across environments.'
                ],
                blogLink: {
                    href: 'https://fsgateware.blogspot.com/2026/02/month-2-part-1.html',
                    text: 'Read more on my blog'
                }
            }
        ],
        keyImpact: [
            'Improved robustness of Vulkan device initialization across differing SDK and driver versions',
            'Delivered tested, production-ready math utilities for OBB generation',
            'Advanced collision system reliability through SAT debugging and numerical analysis',
            'Strengthened cross-platform stability via reproducible test cases'
        ]
    },
    {
        title: 'Robocode AI: A Rule-Based System Implementation',
        image: '/images/RobocodeThumbnail.png',
        slug: 'robocode',
        technologies: ['Java', 'Robocode API'],
        link: 'https://github.com/SpannNoah/rulebased-robocode-ai',
        about: 
        `This project is an implementation of a rule-based system in Java, based on the framework
        described in Artificial Intelligence for Games, 2nd Edition by Ian Millington and John Funge.
        Rule-based systems represent knowledge as a set of IF-THEN rules that operate on facts
        stored in databases. The system matches rules to facts and triggers actions when
        conditions are satisfied. My implementation demonstrates rule-based reasoning applied to
        a computer-controlled player, showing both the benefits and limitations of this approach.`,
        implementationDetails: 
        `The core design centers on the Database and it’s supporting classes (DataNode,
        DataGroup, Datum) which manage facts and organize them into a structured knowledge
        base. Matches are structured similarly to the data in the database, with identifiers allowing
        the rule based iteration to find appropriate groups and evaluate conditions. This system
        drives the reasoning process by checking conditions, applying matching rules, and
        updating the database accordingly. This design allows logic such as: If the enemy has been
        located and my previous move has finished then move to the next location away from the
        enemy. The result is a working demonstration of rule based decision making applied to a
        computer controlled player.`,
        lessonsLearned:
        `In practice, the system provided several advantages: cleaner and more modular code,
        sensible logic, and tight control over AI behavior. Separating matching patterns into their
        own class and using helper functions to create the rules kept the implementation readable
        and maintainable. However, I also encountered limitations such as single-action
        execution, equal-priority decision making, and lack of parallel sequencing. To address this,
        I introduced a priority level to rules, (executing the highest-priority action among matching
        rules) and categorizing rules into movement and combat, which allowed both types of
        behavior to run in parallel. While this increased processing time (minimal given the scope
        of my AI program), it resulted in more realistic AI behavior and demonstrated how rule-
        based systems can be refined for game applications.`
    },
    {
        title: 'Battlefield 6 MOD: Gunfight Mode',
        image: '/images/battlefieldportal.png',
        slug: 'battlefield6mod',
        technologies: ['Godot', 'TypeScript', 'Battlefield Portal'],
        link: 'https://www.ea.com/games/battlefield/battlefield-6/portal/buy/creation/3033a550-aeb5-11f0-b654-be13237bdf8a',
        about: 
        `A custom game mode for Battlefield 6 using the newly released SDK for Battlefield Portal.
        This mode is a recreation of my favorite multiplayer mode from Call of Duty: Modern Warfare
        and includes random loadouts, a round timer, round-based scoring, multiple maps, and more.`,
        implementationDetails:
        `The implementation involved designing modular UI elements, wiring them into gameplay events, and managing state updates to ensure
        responsive, real-time feedback. Emphasis was placed on clean separation between presentation and game logic, maintainable component
        structure, and iterative tuning to align UI behavior with fast-paced gameplay.`,
        lessonsLearned:
        `This project provided valuable experience in working with AAA created systems and tools, as well as adapting to the constraints and capabilities of the Battlefield Portal SDK.`
    }
];