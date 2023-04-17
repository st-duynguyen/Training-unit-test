import { AuthStorageService } from './authStorage.service';

export default class AuthenService {
  storage: AuthStorageService;

  constructor() {
    this.storage = new AuthStorageService();
  }

  getTokenHeader() {
    return this.storage.getToken();
  }

  setTokenHeader(newToken: string) {
    return this.storage.setToken(newToken);
  }

  signOut() {
    return this.storage.removeToken();
  }
}
