import {test,expect} from '@playwright/test'


test('should render the button',async ({page}) => {
    await page.goto('/');// go to home page
    await page.waitForSelector('button'); // wait for button to be rendered
        // take a screen shot
    const screenshot = await page.screenshot({path : `screenshot/ss-${page.viewportSize().width}.png`});        

    await expect(page).toHaveScreenshot({maxDiffPixels: 100});
})