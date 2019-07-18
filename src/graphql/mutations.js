// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    url
    availabilities {
      items {
        id
        time
        longitude
        latitude
      }
      nextToken
    }
    likes {
      items {
        id
      }
      nextToken
    }
    likedby {
      items {
        id
      }
      nextToken
    }
    ignores {
      items {
        id
      }
      nextToken
    }
    ignoredby {
      items {
        id
      }
      nextToken
    }
    firstName
    lastName
    defaultLatitude
    defaultLongitude
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    url
    availabilities {
      items {
        id
        time
        longitude
        latitude
      }
      nextToken
    }
    likes {
      items {
        id
      }
      nextToken
    }
    likedby {
      items {
        id
      }
      nextToken
    }
    ignores {
      items {
        id
      }
      nextToken
    }
    ignoredby {
      items {
        id
      }
      nextToken
    }
    firstName
    lastName
    defaultLatitude
    defaultLongitude
  }
}
`;
export const removeUser = `mutation RemoveUser($input: DeleteUserInput!) {
  removeUser(input: $input) {
    id
    url
    availabilities {
      items {
        id
        time
        longitude
        latitude
      }
      nextToken
    }
    likes {
      items {
        id
      }
      nextToken
    }
    likedby {
      items {
        id
      }
      nextToken
    }
    ignores {
      items {
        id
      }
      nextToken
    }
    ignoredby {
      items {
        id
      }
      nextToken
    }
    firstName
    lastName
    defaultLatitude
    defaultLongitude
  }
}
`;
export const createLike = `mutation CreateLike($input: CreateLikeInput!) {
  createLike(input: $input) {
    id
    sender {
      id
      url
      availabilities {
        nextToken
      }
      likes {
        nextToken
      }
      likedby {
        nextToken
      }
      ignores {
        nextToken
      }
      ignoredby {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
    receiver {
      id
      url
      availabilities {
        nextToken
      }
      likes {
        nextToken
      }
      likedby {
        nextToken
      }
      ignores {
        nextToken
      }
      ignoredby {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
  }
}
`;
export const removeLike = `mutation RemoveLike($input: DeleteLikeInput!) {
  removeLike(input: $input) {
    id
    sender {
      id
      url
      availabilities {
        nextToken
      }
      likes {
        nextToken
      }
      likedby {
        nextToken
      }
      ignores {
        nextToken
      }
      ignoredby {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
    receiver {
      id
      url
      availabilities {
        nextToken
      }
      likes {
        nextToken
      }
      likedby {
        nextToken
      }
      ignores {
        nextToken
      }
      ignoredby {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
  }
}
`;
export const createIgnore = `mutation CreateIgnore($input: CreateIgnoreInput!) {
  createIgnore(input: $input) {
    id
    sender {
      id
      url
      availabilities {
        nextToken
      }
      likes {
        nextToken
      }
      likedby {
        nextToken
      }
      ignores {
        nextToken
      }
      ignoredby {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
    receiver {
      id
      url
      availabilities {
        nextToken
      }
      likes {
        nextToken
      }
      likedby {
        nextToken
      }
      ignores {
        nextToken
      }
      ignoredby {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
  }
}
`;
export const removeIgnore = `mutation RemoveIgnore($input: DeleteIgnoreInput!) {
  removeIgnore(input: $input) {
    id
    sender {
      id
      url
      availabilities {
        nextToken
      }
      likes {
        nextToken
      }
      likedby {
        nextToken
      }
      ignores {
        nextToken
      }
      ignoredby {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
    receiver {
      id
      url
      availabilities {
        nextToken
      }
      likes {
        nextToken
      }
      likedby {
        nextToken
      }
      ignores {
        nextToken
      }
      ignoredby {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
  }
}
`;
export const createPlacetime = `mutation CreatePlacetime($input: CreatePlacetimeInput!) {
  createPlacetime(input: $input) {
    id
    nodes {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createNode = `mutation CreateNode($input: CreateNodeInput!) {
  createNode(input: $input) {
    id
    placetime {
      id
      nodes {
        nextToken
      }
    }
    availability {
      id
      user {
        id
        url
        firstName
        lastName
        defaultLatitude
        defaultLongitude
      }
      nodes {
        nextToken
      }
      time
      longitude
      latitude
    }
  }
}
`;
export const removeNode = `mutation RemoveNode($input: DeleteNodeInput!) {
  removeNode(input: $input) {
    id
    placetime {
      id
      nodes {
        nextToken
      }
    }
    availability {
      id
      user {
        id
        url
        firstName
        lastName
        defaultLatitude
        defaultLongitude
      }
      nodes {
        nextToken
      }
      time
      longitude
      latitude
    }
  }
}
`;
export const createAvailability = `mutation CreateAvailability($input: CreateAvailabilityInput!) {
  createAvailability(input: $input) {
    id
    user {
      id
      url
      availabilities {
        nextToken
      }
      likes {
        nextToken
      }
      likedby {
        nextToken
      }
      ignores {
        nextToken
      }
      ignoredby {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
    nodes {
      items {
        id
      }
      nextToken
    }
    time
    longitude
    latitude
  }
}
`;
export const removeAvailability = `mutation RemoveAvailability($input: DeleteAvailabilityInput!) {
  removeAvailability(input: $input) {
    id
    user {
      id
      url
      availabilities {
        nextToken
      }
      likes {
        nextToken
      }
      likedby {
        nextToken
      }
      ignores {
        nextToken
      }
      ignoredby {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
    nodes {
      items {
        id
      }
      nextToken
    }
    time
    longitude
    latitude
  }
}
`;
