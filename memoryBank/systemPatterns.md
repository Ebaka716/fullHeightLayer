# System Patterns

*   **Architecture:** Simple component-based architecture within Next.js App Router.
*   **Key Decisions:**
    *   Using custom components for layout (`FullHeightLayer`) and direct header/main structure in `ExamplePage`.
    *   Manual implementation of resizing (with dynamic 75% max width) and transitions using React state, effects, and CSS.
    *   Using `lucide-react` for UI icons.
*   **Design Patterns:**
    *   State Lifting: Layer visibility state managed in parent (`ExamplePage`) and passed down.
    *   Component Composition: Directly composes header, main content, and `FullHeightLayer` in `ExamplePage`.
    *   Relative/Absolute positioning for icon placement within input field.
*   **Component Relationships:**
    *   `src/app/page.tsx` renders `ExamplePage`.
    *   `ExamplePage` renders a fixed header, main content (currently a static table), and `FullHeightLayer`.
    *   `FullHeightLayer` renders its own header (with styled menu/close buttons), content area (with bottom-aligned input + send icon), resizer handle, and internal menu view (with icon buttons).
*   **Critical Paths:** Toggling layer visibility, resizing layer, toggling internal menu view, interacting with input. 