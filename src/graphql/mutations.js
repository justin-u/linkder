// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    freeTimes {
      items {
        id
        dateString
        longitude
        latitude
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
    freeTimes {
      items {
        id
        dateString
        longitude
        latitude
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    freeTimes {
      items {
        id
        dateString
        longitude
        latitude
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
export const createFreeTime = `mutation CreateFreeTime($input: CreateFreeTimeInput!) {
  createFreeTime(input: $input) {
    id
    user {
      id
      freeTimes {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
    freeTimePlaceTimes {
      items {
        id
      }
      nextToken
    }
    dateString
    longitude
    latitude
  }
}
`;
export const updateFreeTime = `mutation UpdateFreeTime($input: UpdateFreeTimeInput!) {
  updateFreeTime(input: $input) {
    id
    user {
      id
      freeTimes {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
    freeTimePlaceTimes {
      items {
        id
      }
      nextToken
    }
    dateString
    longitude
    latitude
  }
}
`;
export const deleteFreeTime = `mutation DeleteFreeTime($input: DeleteFreeTimeInput!) {
  deleteFreeTime(input: $input) {
    id
    user {
      id
      freeTimes {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
    freeTimePlaceTimes {
      items {
        id
      }
      nextToken
    }
    dateString
    longitude
    latitude
  }
}
`;
export const createFreeTimePlaceTime = `mutation CreateFreeTimePlaceTime($input: CreateFreeTimePlaceTimeInput!) {
  createFreeTimePlaceTime(input: $input) {
    id
    freeTime {
      id
      user {
        id
        firstName
        lastName
        defaultLatitude
        defaultLongitude
      }
      freeTimePlaceTimes {
        nextToken
      }
      dateString
      longitude
      latitude
    }
    placeTime {
      id
      dateString
      freeTimePlaceTimes {
        nextToken
      }
      place {
        id
        name
      }
    }
  }
}
`;
export const updateFreeTimePlaceTime = `mutation UpdateFreeTimePlaceTime($input: UpdateFreeTimePlaceTimeInput!) {
  updateFreeTimePlaceTime(input: $input) {
    id
    freeTime {
      id
      user {
        id
        firstName
        lastName
        defaultLatitude
        defaultLongitude
      }
      freeTimePlaceTimes {
        nextToken
      }
      dateString
      longitude
      latitude
    }
    placeTime {
      id
      dateString
      freeTimePlaceTimes {
        nextToken
      }
      place {
        id
        name
      }
    }
  }
}
`;
export const deleteFreeTimePlaceTime = `mutation DeleteFreeTimePlaceTime($input: DeleteFreeTimePlaceTimeInput!) {
  deleteFreeTimePlaceTime(input: $input) {
    id
    freeTime {
      id
      user {
        id
        firstName
        lastName
        defaultLatitude
        defaultLongitude
      }
      freeTimePlaceTimes {
        nextToken
      }
      dateString
      longitude
      latitude
    }
    placeTime {
      id
      dateString
      freeTimePlaceTimes {
        nextToken
      }
      place {
        id
        name
      }
    }
  }
}
`;
export const createPlaceTime = `mutation CreatePlaceTime($input: CreatePlaceTimeInput!) {
  createPlaceTime(input: $input) {
    id
    dateString
    freeTimePlaceTimes {
      items {
        id
      }
      nextToken
    }
    place {
      id
      placeTimes {
        nextToken
      }
      name
    }
  }
}
`;
export const updatePlaceTime = `mutation UpdatePlaceTime($input: UpdatePlaceTimeInput!) {
  updatePlaceTime(input: $input) {
    id
    dateString
    freeTimePlaceTimes {
      items {
        id
      }
      nextToken
    }
    place {
      id
      placeTimes {
        nextToken
      }
      name
    }
  }
}
`;
export const deletePlaceTime = `mutation DeletePlaceTime($input: DeletePlaceTimeInput!) {
  deletePlaceTime(input: $input) {
    id
    dateString
    freeTimePlaceTimes {
      items {
        id
      }
      nextToken
    }
    place {
      id
      placeTimes {
        nextToken
      }
      name
    }
  }
}
`;
export const createPlace = `mutation CreatePlace($input: CreatePlaceInput!) {
  createPlace(input: $input) {
    id
    placeTimes {
      items {
        id
        dateString
      }
      nextToken
    }
    name
  }
}
`;
export const updatePlace = `mutation UpdatePlace($input: UpdatePlaceInput!) {
  updatePlace(input: $input) {
    id
    placeTimes {
      items {
        id
        dateString
      }
      nextToken
    }
    name
  }
}
`;
export const deletePlace = `mutation DeletePlace($input: DeletePlaceInput!) {
  deletePlace(input: $input) {
    id
    placeTimes {
      items {
        id
        dateString
      }
      nextToken
    }
    name
  }
}
`;
