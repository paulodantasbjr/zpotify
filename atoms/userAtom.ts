import { atom } from 'recoil'

export const userAtom = atom({
  key: 'userState',
  default: {
    accessToken: '',
    expires: '',
    user: {
      email: '',
      id: '',
      name: '',
    },
  },
})
