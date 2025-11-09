import { chromium } from '@playwright/test'

const widths = [320, 375, 768, 1024, 1280, 1440]
const url = process.env.SITE_URL || 'http://localhost:3000'

const run = async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  for (const w of widths) {
    await page.setViewportSize({ width: w, height: 900 })
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.screenshot({ path: `./snapshots/home-${w}.png`, fullPage: true })
    console.log('Saved snapshot for width', w)
  }
  await browser.close()
}

run().catch((e) => { console.error(e); process.exit(1) })
