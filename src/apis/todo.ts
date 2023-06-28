import axios from '../plugins/axios';

export const signIn = (payload:{}) => axios.post('/v2/admin/signin', payload);