// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      freeTimes {
        nextToken
      }
      firstName
      lastName
      defaultLatitude
      defaultLongitude
    }
    nextToken
  }
}
`;
export const getFreeTime = `query GetFreeTime($id: ID!) {
  getFreeTime(id: $id) {
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
export const listFreeTimes = `query ListFreeTimes(
  $filter: ModelFreeTimeFilterInput
  $limit: Int
  $nextToken: String
) {
  listFreeTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getFreeTimePlaceTime = `query GetFreeTimePlaceTime($id: ID!) {
  getFreeTimePlaceTime(id: $id) {
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
export const listFreeTimePlaceTimes = `query ListFreeTimePlaceTimes(
  $filter: ModelFreeTimePlaceTimeFilterInput
  $limit: Int
  $nextToken: String
) {
  listFreeTimePlaceTimes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      freeTime {
        id
        dateString
        longitude
        latitude
      }
      placeTime {
        id
        dateString
      }
    }
    nextToken
  }
}
`;
export const getPlaceTime = `query GetPlaceTime($id: ID!) {
  getPlaceTime(id: $id) {
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
export const listPlaceTimes = `query ListPlaceTimes(
  $filter: ModelPlaceTimeFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlaceTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPlace = `query GetPlace($id: ID!) {
  getPlace(id: $id) {
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
export const listPlaces = `query ListPlaces(
  $filter: ModelPlaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      placeTimes {
        nextToken
      }
      name
    }
    nextToken
  }
}
`;
