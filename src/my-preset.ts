import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// Replace indigo with your brand-blue hex values
export const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#f0f6ff',
            100: '#dbeafe',
            200: '#bfd8fb',
            300: '#97bff6',
            400: '#6f9fe6',
            500: '#3f7bd6',
            600: '#235fbf',
            700: '#144b9a',
            800: '#0b3b75',
            900: '#0b2545',
            950: '#081a30',
        },
    },
});
