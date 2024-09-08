import {devices} from '@playwright/test'

export default {
    webServer : {
        command : 'npm run dev',
        port: 5173,
        reuseExistingServer: !process.env.CI,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'Iphone',
            use: {...devices['iPhone 11']}
        }
    ],
    use:{
        baseUrl :'http://localhost:5173',
        screenshot: 'only-on-failure',
        trace : 'on-first-retry',
    }
}