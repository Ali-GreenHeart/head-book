module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/shadcn/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                dark: '#1a202c',
                light: '#ffffff',
            }
        }
    },
    darkMode: 'class',
}
