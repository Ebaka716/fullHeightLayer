# Active Context

*   **Current Focus:** Refactoring and documenting the `FullHeightLayer` component and its integration.
*   **Recent Changes:**
    *   Reverted previous attempt to use shadcn `Sidebar` component.
    *   Restored custom `FullHeightLayer` implementation.
    *   Implemented state lifting for layer visibility control from `ExamplePage`.
    *   Added toggle button with active state to main header (`ExamplePage`).
    *   Added smooth slide-in/out transition for the main layer.
    *   Added draggable resizing to the main layer (respecting header position).
    *   Implemented internal menu button and slide-in menu takeover view within the layer.
    *   Added placeholder buttons (New Search, History, Settings) to menu view.
*   **Next Steps:** Update documentation and Memory Bank to reflect current state.
*   **Decisions/Considerations:**
    *   Using manual state management and CSS transitions for layer visibility/menu view.
    *   Using manual mouse event handling for resizing.
*   **Patterns/Preferences:**
    *   State lifting for controlling child component visibility.
    *   Using `cn` utility for conditional classes.
    *   Using CSS transforms and transitions for animations.
*   **Learnings/Insights:**
    *   Experienced unexpected issues with Git commands (`reset`, `show`) and edit tool application, requiring manual file restoration/verification. 