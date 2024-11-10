//done by Malik Haj Asad
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  page.setDefaultTimeout(60000); // Set to 60 seconds
  page.setDefaultNavigationTimeout(60000); 
  await page.goto('https://portal.psut.edu.jo/');
  await page.getByText('تسجيل الدخول تسجيل الدخول نسيت كلمة المرور؟ اضغط هنا').click();
  await page.getByPlaceholder('اسم المستخدم').click();
  await page.getByPlaceholder('اسم المستخدم').fill('number');
  await page.getByPlaceholder('كلمة المرور').click();
  await page.getByPlaceholder('كلمة المرور').fill('password');
  await page.getByPlaceholder('كلمة المرور').press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'النظام الاكاديمي' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'English' }).click();
  await page1.getByRole('heading', { name: 'Registration' }).click();
  await page1.getByRole('link', { name: 'Drop and Add' }).click();
  await page1.getByRole('link', { name: 'Accept' }).click();
  await page1.getByRole('link', { name: 'All' }).click();
  await page1.locator('#ContentPlaceHolder1_ddlCourseName_chzn').getByRole('textbox').fill('num');
  await page1.locator('#ContentPlaceHolder1_ddlCourseName_chzn_o_5').click();
  await page1.getByRole('link', { name: 'Search' }).click();
  
  //await page1.getByRole('link', { name: 'Numerical Analysis Blended' }).click();
  // await page1.locator('#ContentPlaceHolder1_ddlCourseName_chzn_o_29').click();
  //await page1.getByRole('link', { name: 'Search' }).click();
  // var num1 = await page1.getByText('38').innerText();
  // var num2 = await page1.getByText('40', { exact: true }).innerText();
  // //await page1.getByRole('link', { name: 'Search' }).click();
  var x = await page1.locator('#ContentPlaceHolder1_gvRegistrationCoursesSchedule_lblGvRegStNo_0').innerText();
  var y = await page1.locator('#ContentPlaceHolder1_gvRegistrationCoursesSchedule_lblGvMaxStNo_0').innerText();
  let yValue = parseInt(y, 10);
  let xValue = parseInt(x, 10);
  while(xValue == yValue ){   
    await page1.getByRole('link', { name: 'Search' }).click();
    x = await page1.locator('#ContentPlaceHolder1_gvRegistrationCoursesSchedule_lblGvRegStNo_0').innerText();
    y = await page1.locator('#ContentPlaceHolder1_gvRegistrationCoursesSchedule_lblGvMaxStNo_0').innerText();
    yValue = parseInt(y);
    xValue = parseInt(x);
    if(yValue != xValue)
      break;
    await page.waitForTimeout(300);
  }
  await page1.getByRole('link', { name: 'Add Course' }).click();
});
