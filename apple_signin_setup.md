# Final Steps for Apple Sign-In

To make Apple Sign-In actually work, you must complete the setup in the **Apple Developer Portal** and your **Supabase Dashboard**. Follow these steps carefully:

## 1. Apple Developer Portal Setup
You need an active Apple Developer account to configure this.
1. Go to [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources/identifiers/list) on your Apple Developer account.
2. Under **Identifiers**, find and click on your App ID with the Bundle ID `com.Centimo.lloydie`.
3. Scroll down the Capabilities list, check **Sign In with Apple**, and click Save.
4. Go back to Identifiers, click the **+** button, select **Services IDs**, and click Continue.
5. Create a Service ID (e.g., Description: `Centimo Web`, Identifier: `com.Centimo.lloydie.service`).
6. Click into the new Service ID, check the box next to **Sign In with Apple**, and click **Configure**.
7. Under **Primary App ID**, select your `com.Centimo.lloydie` app. 
8. Under **Web Domain**, add your Supabase project URL (e.g., `mzdemyucowvyqupuphlw.supabase.co`).
9. Under **Return URLs**, add `https://mzdemyucowvyqupuphlw.supabase.co/auth/v1/callback` and click **Save**.
10. Finally, go to the **Keys** section on the left menu, click **+** to generate a new key. Name it something like `Centimo Apple Key`, check **Sign In with Apple**, Configure it to link to your primary App ID, and download the `.p8` file. **Keep this safe!**

## 2. Supabase Dashboard Setup
Now, take the information you got from Apple and put it into Supabase.
1. Go to your Supabase Dashboard -> **Authentication** -> **Providers** -> **Apple**.
2. Turn on the **Enable Sign in with Apple** switch.
3. Fill in the following details:
   - **Services ID**: The Service ID you created (e.g., `com.Centimo.lloydie.service`).
   - **Team ID**: Your 10-character Apple Team ID (found in the top right corner of the Apple Developer portal).
   - **Key ID**: The 10-character Key ID from the `.p8` key file you downloaded.
   - **Secret Key**: Copy and paste the entire contents of the `.p8` file (including the `BEGIN PRIVATE KEY` and `END PRIVATE KEY` lines).
4. Click **Save**.

> **IMPORTANT**: Once you have done this, stop your app from running on the iOS Simulator, and run a fresh build. The "Continue with Apple" button should now successfully log you in!
