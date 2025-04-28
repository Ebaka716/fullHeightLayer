# Active Context

*   **Current Focus:** UI polish, deployment stability, and documentation updates.
*   **Recent Changes:**
    *   Removed `PageLayout` component and refactored layout to use direct header/main structure in `ExamplePage`.
    *   Changed browser tab title to "Full Height" via app metadata.
    *   Fixed Vercel build by removing missing component references.
    *   Header color updated (purple → blue) for clarity.
*   **Next Steps:** Continue UI refinements and document new layout pattern.
*   **Decisions/Considerations:**
    *   Using direct header/main layout for simplicity and maintainability.
    *   State management and transitions remain manual for layer visibility and resizing.
*   **Patterns/Preferences:**
    *   State lifting for controlling child component visibility.
    *   Using `cn` utility for conditional classes.
    *   Using CSS transforms and transitions for animations.
*   **Learnings/Insights:**
    *   Removing unnecessary abstraction (PageLayout) simplified the codebase and resolved build issues. 