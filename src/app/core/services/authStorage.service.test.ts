import { AuthStorageService } from './authStorage.service';

describe('Check auth storage service is called', () => {
  const authStorageService = new AuthStorageService();
  it('getToken is called', () => {
    const getTokenMock = jest.spyOn(Storage.prototype, 'getItem');
    authStorageService.getToken();
    expect(getTokenMock).toBeCalledTimes(1);
    expect(getTokenMock).toBeCalledWith('token');
  });
  
  it('setToken is called', () => {
    const setTokenMock = jest.spyOn(Storage.prototype, 'setItem');
    authStorageService.setToken('xxxxx');
    expect(setTokenMock).toBeCalledTimes(1);
    expect(setTokenMock).toBeCalledWith('token', 'xxxxx');
  });

  it('removeToken is called', () => {
    const removeTokenMock =jest.spyOn(Storage.prototype, 'removeItem');
    authStorageService.removeToken();
    expect(removeTokenMock).toBeCalledTimes(1);
    expect(removeTokenMock).toBeCalledWith('token');
  });
});
