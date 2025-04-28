# System Patterns

*   **Architecture:** Simple component-based architecture within Next.js App Router.
*   **Key Decisions:**
    *   Using custom components for layout (`PageLayout`, `FullHeightLayer`) instead of relying solely on pre-built blocks.
    *   Manual implementation of resizing and transitions using React state, effects, and CSS.
*   **Design Patterns:**
    *   State Lifting: Layer visibility state managed in parent (`ExamplePage`) and passed down.
    *   Component Composition: `PageLayout` accepts `headerContent` and `children`.
*   **Component Relationships:**
    *   `src/app/page.tsx` renders `ExamplePage`.
    *   `ExamplePage` renders `PageLayout` and `FullHeightLayer`.
    *   `PageLayout` renders its children and a fixed header.
    *   `FullHeightLayer` renders its own header, content area, and internal menu view.
*   **Critical Paths:** Toggling layer visibility, resizing layer, toggling internal menu view. 