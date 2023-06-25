import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { extractNameFromEmail } from '../utils';
import moment from 'moment';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  lastLogedAt: Date;
}

interface UseStoreAuthUsersInterface {
  users: User[];
  addUser: (email: string, password: string) => void;
  removeUser: (userId: number | undefined) => void;
}

const useStoreAuthUsers = create<UseStoreAuthUsersInterface>()(
  devtools(
    persist(
      (set) => ({
        users: [],
        addUser: (email, password) => {
          const newUser: User = {
            id: Date.now(),
            name: extractNameFromEmail(email),
            email,
            password,
            lastLogedAt: new Date(),
          };
          set((prevState) => ({
            users: [...prevState.users, newUser],
          }));
        },
        removeUser: (userId) => {
          if (userId) {
            set((prevState) => ({
              users: prevState.users.filter((u) => u.id !== userId),
            }));
          }
        },
      }),
      {
        name: 'auth-storage',
      }
    )
  )
);

export default useStoreAuthUsers;
