This repo let's you see the OAuth 2.0 Implicit flow and the Authorization Code with PKCE flow in action.

The Implicit flow is effectively deprecated and should no longer be used.

You need a free [Okta Developer Org](https://developer.okta.con/signup) to get started.

In the admin console of your Okta org, Navigate to: **Applications**

- Click the green **Add Application** button 
- Select **Single-Page App** application, and click **Next**
- Give the app a **Name**.
- Change the value for **Login redirect URIs**  to `http://localhost:8080/callback`
- Check **Authorization Code** (and leave **Implicit** clicked)
- Click **Done**

Take note of the **Client ID** at the bottom of the page.

You need to edit the `src/auth/index.js` with your Okta domain and the **Client ID** value.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```