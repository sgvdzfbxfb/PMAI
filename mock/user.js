
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'http://r.photo.store.qq.com/psc?/V13knonV49hfp6/L*Kej6uubMuzNnUMMkfitD8HkDCbUXl*Ky8UieUfStqoEjNVCoiMgei37ly1bzPXKkjLKcq.P7P*uCFAKT6KrHQGEbq*id1bz3r*ULdE050!/r',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'http://r.photo.store.qq.com/psc?/V13knonV49hfp6/L*Kej6uubMuzNnUMMkfitKe8w4CLt0cASQWMjJrdzJv0GVK3pwiMfBHKJeWSKmhEpGCXX*GZzLmZVpGddvIxXjT8r5dkOyMj.Xt.wY26hqw!/r',
    name: 'Normal Visitor'
  }
}

export default [
  // user login
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-element-admin/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
