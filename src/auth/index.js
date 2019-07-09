import OktaAuth from '@okta/okta-auth-js';
import router from '../router';

const ISSUER = '';
const CLIENT_ID = ''
const REDIRECT_URL = window.location.origin + '/redirect';

const oktaAuth = new OktaAuth({
    issuer: ISSUER,
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URL,
    grantType:  'authorization_code'
});

export async function loginOkta() {
    oktaAuth.token.getWithRedirect({
        responseType: 'code',
        scopes: ['openid', 'profile', 'email'],
    });
}

export async function redirect() {
    oktaAuth.token.parseFromUrl()
    .then((tokens) => {
        tokens.forEach((token) => {
            if (token.idToken) {
                oktaAuth.tokenManager.add('id_token', token);
            } else if (token.accessToken) {
                oktaAuth.tokenManager.add('access_token', token);
            }
        });
        router.push('/profile');
    })
    .catch(console.error);
}

export function validateAccess(to, from, next) {
    getIdToken()
    .then(function(token) {
        if (token) {
            next();
        } else {
            oktaAuth.tokenManager.clear();
            router.push('/login');
        }          
    })
    .catch(console.error);
}

export function getIdToken() {
    return oktaAuth.tokenManager.get('id_token');
}
  
export function getAccessToken() {
    return oktaAuth.tokenManager.get('access_token');
}
  