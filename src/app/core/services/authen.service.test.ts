import AuthenService from './authen.service';

describe('Check Authen service is called', () => {
  const authService = new AuthenService();
  it('getTokenHeader is called', () => {
    const getTokenHeaderMock = jest.spyOn(AuthenService.prototype, 'getTokenHeader');
    authService.getTokenHeader();
    expect(getTokenHeaderMock).toHaveBeenCalledTimes(1);
    expect(getTokenHeaderMock).toBeCalledWith();
  });
  
  it('setTokenHeader is called', () => {
    const setTokenHeaderMock = jest.spyOn(AuthenService.prototype, 'setTokenHeader');
    authService.setTokenHeader('xxxxx');
    expect(setTokenHeaderMock).toHaveBeenCalledTimes(1);
    expect(setTokenHeaderMock).toBeCalledWith( 'xxxxx');
  });

  it('signOut is called', () => {
    const signOutMock =jest.spyOn(AuthenService.prototype, 'signOut');
    authService.signOut();
    expect(signOutMock).toHaveBeenCalledTimes(1);
    expect(signOutMock).toBeCalledWith();
  });
});
