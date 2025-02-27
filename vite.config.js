// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
//   plugins: [react()],
// });
import { defineConfig } from 'vite';

export default defineConfig({
  // Other configurations...
  optimizeDeps: {
    exclude: [
      '@mui/material/Stack',
      '@mui/material/Alert',
      '@mui/material/styles/styled',
      '@mui/material/utils/useSlot',
      '@mui/material/AlertTitle',
      '@mui/material/internal/svg-icons/InfoOutlined',
      '@mui/material/internal/svg-icons/SuccessOutlined',
      '@mui/material/internal/svg-icons/ErrorOutline',
      '@mui/material/internal/svg-icons/ReportProblemOutlined',
      '@mui/material/internal/svg-icons/Close',
      '@mui/material/styles/defaultTheme',
      '@mui/system/esm/Grid/Grid',
      '@mui/material/utils/createSvgIcon',
      '@mui/system/esm/Stack/Stack',
      '@mui/material/GlobalStyles',
      '@mui/system/esm/ThemeProvider/ThemeProvider',
      '@mui/system/esm/Container/Container',
      '@mui/system/esm/useMediaQuery/useMediaQuery',
      '@mui/system/esm/cssVars/useCurrentColorScheme',
      '@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider',
      '@mui/material/CircularProgress',
      '@mui/material/ButtonBase',
      '@mui/styled-engine/StyledEngineProvider',
      '@mui/material/utils/useEnhancedEffect',
      '@mui/material/utils/useId',
      '@mui/material/utils/useControlled',
      '@mui/material/utils/useEventCallback',
      '@mui/material/utils/useForkRef',
      '@mui/styled-engine/GlobalStyles',
      '@mui/utils/esm/useEnhancedEffect/useEnhancedEffect',
      '@mui/material/SvgIcon',
      '@mui/material/useLazyRipple',
      '@mui/material/ButtonBase/TouchRipple',
      '@mui/utils/esm/useTimeout/useTimeout',
      '@mui/utils/esm/useId/useId',
      '@mui/utils/esm/useControlled/useControlled',
      '@mui/utils/esm/useEventCallback/useEventCallback',
      '@mui/utils/esm/useLazyRef/useLazyRef',
      '@mui/utils/esm/useOnMount/useOnMount',
      '@mui/utils/esm/usePreviousProps/usePreviousProps',
      '@mui/utils/esm/useIsFocusVisible/useIsFocusVisible',
      '@mui/utils/esm/useSlotProps/useSlotProps',
      '@mui/material/useLazyRipple',
      '@mui/private-theming/useTheme/ThemeContext',
      '@mui/material/ButtonBase/Ripple'
    ]
  }
});
