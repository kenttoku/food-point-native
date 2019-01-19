import { AsyncStorage } from 'react-native';

export const loadAuthToken = async () => {
  try {
    return await AsyncStorage.getItem('authToken');
  } catch (e) {
    return e;
  }
};

export const saveAuthToken = async (authToken) => {
  try {
    return await AsyncStorage.setItem('authToken', authToken);
  } catch (e) {
    return e;
  }
};

export const clearAuthToken = async () => {
  try {
    return await AsyncStorage.removeItem('authToken');
  } catch (e) {
    return e;
  }
};
