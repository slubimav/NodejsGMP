export default {
      users: {
        getAll: '/users',
        getById: id => `/users/${id}`,
        create: '/users',
        update: id => `/users/${id}`,
        delete: id => `/users/${id}`
      },
      groups: {
        getAll: '/groups',
        getById: id => `/groups/${id}`,
        create: '/groups',
        update: id => `/groups/${id}`,
        delete: id => `/groups/${id}`
      },
      login: '/users/signin',
      protected: '/protected'
    };