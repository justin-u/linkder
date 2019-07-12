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
      }
      nextToken
    }
    likes {
      items {
        id
      }
      nextToken
    }
    dislikes {
      items {
        id
      }
      nextToken
    }
    firstName
    lastName
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
      }
      nextToken
    }
    likes {
      items {
        id
      }
      nextToken
    }
    dislikes {
      items {
        id
      }
      nextToken
    }
    firstName
    lastName
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
      }
      nextToken
    }
    likes {
      items {
        id
      }
      nextToken
    }
    dislikes {
      items {
        id
      }
      nextToken
    }
    firstName
    lastName
  }
}
`;
export const createLike = `mutation CreateLike($input: CreateLikeInput!) {
  createLike(input: $input) {
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
      dislikes {
        nextToken
      }
      firstName
      lastName
    }
  }
}
`;
export const removeLike = `mutation RemoveLike($input: DeleteLikeInput!) {
  removeLike(input: $input) {
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
      dislikes {
        nextToken
      }
      firstName
      lastName
    }
  }
}
`;
export const createDislike = `mutation CreateDislike($input: CreateDislikeInput!) {
  createDislike(input: $input) {
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
      dislikes {
        nextToken
      }
      firstName
      lastName
    }
  }
}
`;
export const removeDisike = `mutation RemoveDisike($input: DeleteDislikeInput!) {
  removeDisike(input: $input) {
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
      dislikes {
        nextToken
      }
      firstName
      lastName
    }
  }
}
`;
export const createBlock = `mutation CreateBlock($input: CreateBlockInput!) {
  createBlock(input: $input) {
    id
    availabilities {
      items {
        id
        time
      }
      nextToken
    }
  }
}
`;
export const removeBlock = `mutation RemoveBlock($input: DeleteBlockInput!) {
  removeBlock(input: $input) {
    id
    availabilities {
      items {
        id
        time
      }
      nextToken
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
      dislikes {
        nextToken
      }
      firstName
      lastName
    }
    time
    block {
      id
      availabilities {
        nextToken
      }
    }
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
      dislikes {
        nextToken
      }
      firstName
      lastName
    }
    time
    block {
      id
      availabilities {
        nextToken
      }
    }
  }
}
`;
