# System Patterns

*   **Architecture:** Simple component-based architecture within Next.js App Router.
*   **Key Decisions:**
    *   Using custom components for layout (`FullHeightLayer`) and direct header/main structure in `ExamplePage` (removed `PageLayout`).
    *   Manual implementation of resizing and transitions using React state, effects, and CSS.
*   **Design Patterns:**
    *   State Lifting: Layer visibility state managed in parent (`ExamplePage`) and passed down.
    *   Component Composition: Directly composes header, main content, and `FullHeightLayer` in `ExamplePage`.
*   **Component Relationships:**
    *   `src/app/page.tsx` renders `ExamplePage`.
    *   `ExamplePage` renders a fixed header, main content, and `FullHeightLayer`.
    *   `FullHeightLayer` renders its own header, content area, and internal menu view.
*   **Critical Paths:** Toggling layer visibility, resizing layer, toggling internal menu view. 