# React + Vite

## Experiment 5: Modular React Frontend

This project demonstrates a component-based student portal built with React.

### Component Structure

- `StudentPortal.jsx` is the parent component. It owns the active tab, notice selection, assignment statuses, attendance values, and profile data using `useState`.
- `PortalHeader.jsx` and `PortalTabs.jsx` receive navigation data and event callbacks through props.
- `NoticeList.jsx`, `AssignmentList.jsx`, `AttendanceTracker.jsx`, and `ProfileCard.jsx` are reusable feature components that render data passed by the parent.
- `NoticeModal.jsx` is a reusable conditional dialog for viewing notice details.

### React Concepts Demonstrated

- Props pass data and callback functions from `StudentPortal` to child components.
- State changes through button clicks, controlled form inputs, and form submission.
- React automatically re-renders the affected interface when state changes.
- The same list and card patterns are reused for multiple notices, assignments, and courses.

### Run the Application

```bash
npm install
npm run dev
```

Open the local Vite URL, choose **Access Student View**, and test the notices, assignment status, attendance, and profile interactions.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
