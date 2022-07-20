describe('Plan Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('should subscribe to the premium plan', async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Select and click option button.
    await element(by.id('option-premium')).tap();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Set focus on email TextInput.
    await element(by.id('input-email')).tap();

    // Type text on email TextInput.
    await element(by.id('input-email')).typeText('rodrigo.goncalves@rocketseat.team');

    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Hide Keyboard to show button.
    await element(by.id('input-email')).tapReturnKey();

    // Click button.
    await element(by.id('button-subscribe')).tap();

    // To be able to visualize the final result of the interaction.
    await new Promise((resolve) => setTimeout(resolve, 5000));


    await device.takeScreenshot('snapshot-premium-plan-test');

    // Verify if message is on screen.
    await expect(element(by.id('confirmation-message'))).toBeVisible();
  });
});