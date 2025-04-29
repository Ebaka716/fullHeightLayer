# Active Context

*   **Current Focus:** Implementing core functionality within the layer panel (input, menu actions) and maintaining documentation.
*   **Recent Changes:**
    *   Styled layer header buttons (menu: orange, close: red) and reduced padding.
    *   Added icons (`lucide-react`) to layer menu buttons.
    *   Replaced main page content with a static HTML table based on image.
    *   Added a bottom-aligned, full-width input field with internal Send icon to the layer content area.
    *   Adjusted layer resizing: max width is 75% of viewport, min width set to 450px.
    *   Fixed Vercel build error by escaping apostrophe in table content (`react/no-unescaped-entities`).
    *   Fixed layer loading initially smaller than min-width by adjusting initial state.
    *   Added `Input` component via Shadcn CLI.
*   **Next Steps:**
    *   Implement functionality for the input field's Send icon.
    *   Implement actions for the layer menu buttons (New Search, History, Settings).
*   **Decisions/Considerations:**
    *   Using direct header/main layout for simplicity.
    *   Manual state management for layer/menu visibility and layer width.
    *   Using Tailwind for styling, including specific height/width/padding values.
*   **Patterns/Preferences:**
    *   State lifting for controlling child component visibility/state.
    *   Using `cn` utility for conditional classes.
    *   Using CSS transforms/transitions for animations.
    *   Using `lucide-react` for icons.
*   **Learnings/Insights:**
    *   Need to escape HTML entities like apostrophes in JSX content for ESLint/React.
    *   Ensure initial component state aligns with constraints (e.g., min-width) to avoid visual glitches on load. 