import Cookies from 'js-cookie';

export const clearCookieToken = () => {
    Cookies.remove('test');
}

export const getCookieToken = () => {
    return Cookies.get('test');
}

export const setCookieToken = (token:string) => {
    Cookies.set('test', token);
}