// Simple Admin Authentication for Soule CMS Panel
// Protected by environment variables in Firebase App Hosting and .env

const STORAGE_KEY = 'soule_admin_session_auth';
const REMEMBER_KEY = 'soule_admin_remember_user';

export interface AdminCredentials {
  username: string;
}

export const getExpectedAdminUsername = (): string => {
  return (import.meta.env.VITE_ADMIN_USERNAME as string);
};

export const getExpectedAdminPassword = (): string => {
  return (import.meta.env.VITE_ADMIN_PASSWORD as string);
};

export const isAdminAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const sessionAuth = sessionStorage.getItem(STORAGE_KEY);
    if (sessionAuth === 'true') return true;

    const localAuth = localStorage.getItem(STORAGE_KEY);
    if (localAuth === 'true') return true;

    return false;
  } catch (e) {
    return false;
  }
};

export const getActiveAdminUsername = (): string => {
  if (typeof window === 'undefined') return getExpectedAdminUsername();
  return localStorage.getItem(REMEMBER_KEY) || getExpectedAdminUsername();
};

export const verifyAdminLogin = (
  enteredUsername: string,
  enteredPass: string,
  rememberSession: boolean = false
): { success: boolean; error?: string } => {
  const expectedUser = getExpectedAdminUsername().trim();
  const expectedPass = getExpectedAdminPassword().trim();

  const cleanUser = enteredUsername.trim();
  const cleanPass = enteredPass.trim();

  if (!cleanUser || !cleanPass) {
    return { success: false, error: 'Please enter both username and password.' };
  }

  if (cleanUser !== expectedUser || cleanPass !== expectedPass) {
    return { success: false, error: 'Incorrect username or password. Please verify credentials.' };
  }

  // Set auth session
  try {
    if (rememberSession) {
      localStorage.setItem(STORAGE_KEY, 'true');
      localStorage.setItem(REMEMBER_KEY, cleanUser);
    } else {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      sessionStorage.setItem(REMEMBER_KEY, cleanUser);
    }
  } catch (e) {
    console.warn('Storage not available for session save:', e);
  }

  return { success: true };
};

export const logoutAdmin = (): void => {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(REMEMBER_KEY);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(REMEMBER_KEY);
  } catch (e) {
    console.warn('Failed to clear admin storage:', e);
  }
};
