export interface Project {
    title: string;
    image: string;
    slug: string;
    technologies: string[];
    about?: string;
    implementationDetails?: string;
    lessonsLearned?: string;
    link?: string;
}

export const projects: Project[] = [
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
    // Add more projects here as needed
];