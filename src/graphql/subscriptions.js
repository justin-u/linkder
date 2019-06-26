// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateFreeTime = `subscription OnCreateFreeTime {
  onCreateFreeTime {
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
export const onUpdateFreeTime = `subscription OnUpdateFreeTime {
  onUpdateFreeTime {
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
export const onDeleteFreeTime = `subscription OnDeleteFreeTime {
  onDeleteFreeTime {
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
export const onCreateFreeTimePlaceTime = `subscription OnCreateFreeTimePlaceTime {
  onCreateFreeTimePlaceTime {
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
export const onUpdateFreeTimePlaceTime = `subscription OnUpdateFreeTimePlaceTime {
  onUpdateFreeTimePlaceTime {
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
export const onDeleteFreeTimePlaceTime = `subscription OnDeleteFreeTimePlaceTime {
  onDeleteFreeTimePlaceTime {
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
export const onCreatePlaceTime = `subscription OnCreatePlaceTime {
  onCreatePlaceTime {
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
export const onUpdatePlaceTime = `subscription OnUpdatePlaceTime {
  onUpdatePlaceTime {
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
export const onDeletePlaceTime = `subscription OnDeletePlaceTime {
  onDeletePlaceTime {
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
export const onCreatePlace = `subscription OnCreatePlace {
  onCreatePlace {
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
export const onUpdatePlace = `subscription OnUpdatePlace {
  onUpdatePlace {
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
export const onDeletePlace = `subscription OnDeletePlace {
  onDeletePlace {
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
