// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    url
    freeTimes {
      items {
        id
        timestamp
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
    dislikes {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    url
    freeTimes {
      items {
        id
        timestamp
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
    dislikes {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    url
    freeTimes {
      items {
        id
        timestamp
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
    dislikes {
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
export const onCreateLikedUser = `subscription OnCreateLikedUser {
  onCreateLikedUser {
    id
    user {
      id
      url
      freeTimes {
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
      defaultLatitude
      defaultLongitude
    }
  }
}
`;
export const onUpdateLikedUser = `subscription OnUpdateLikedUser {
  onUpdateLikedUser {
    id
    user {
      id
      url
      freeTimes {
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
      defaultLatitude
      defaultLongitude
    }
  }
}
`;
export const onDeleteLikedUser = `subscription OnDeleteLikedUser {
  onDeleteLikedUser {
    id
    user {
      id
      url
      freeTimes {
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
      defaultLatitude
      defaultLongitude
    }
  }
}
`;
export const onCreateDislikedUser = `subscription OnCreateDislikedUser {
  onCreateDislikedUser {
    id
    user {
      id
      url
      freeTimes {
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
      defaultLatitude
      defaultLongitude
    }
  }
}
`;
export const onUpdateDislikedUser = `subscription OnUpdateDislikedUser {
  onUpdateDislikedUser {
    id
    user {
      id
      url
      freeTimes {
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
      defaultLatitude
      defaultLongitude
    }
  }
}
`;
export const onDeleteDislikedUser = `subscription OnDeleteDislikedUser {
  onDeleteDislikedUser {
    id
    user {
      id
      url
      freeTimes {
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
      defaultLatitude
      defaultLongitude
    }
  }
}
`;
export const onCreateFreeTime = `subscription OnCreateFreeTime {
  onCreateFreeTime {
    id
    user {
      id
      url
      freeTimes {
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
      defaultLatitude
      defaultLongitude
    }
    freeTimePlaceTimes {
      items {
        id
      }
      nextToken
    }
    timestamp
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
      url
      freeTimes {
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
      defaultLatitude
      defaultLongitude
    }
    freeTimePlaceTimes {
      items {
        id
      }
      nextToken
    }
    timestamp
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
      url
      freeTimes {
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
      defaultLatitude
      defaultLongitude
    }
    freeTimePlaceTimes {
      items {
        id
      }
      nextToken
    }
    timestamp
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
        url
        firstName
        lastName
        defaultLatitude
        defaultLongitude
      }
      freeTimePlaceTimes {
        nextToken
      }
      timestamp
      longitude
      latitude
    }
    placeTime {
      id
      timestamp
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
        url
        firstName
        lastName
        defaultLatitude
        defaultLongitude
      }
      freeTimePlaceTimes {
        nextToken
      }
      timestamp
      longitude
      latitude
    }
    placeTime {
      id
      timestamp
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
        url
        firstName
        lastName
        defaultLatitude
        defaultLongitude
      }
      freeTimePlaceTimes {
        nextToken
      }
      timestamp
      longitude
      latitude
    }
    placeTime {
      id
      timestamp
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
    timestamp
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
    timestamp
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
    timestamp
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
        timestamp
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
        timestamp
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
        timestamp
      }
      nextToken
    }
    name
  }
}
`;
export const onCreateEducation = `subscription OnCreateEducation {
  onCreateEducation {
    id
    school
  }
}
`;
export const onUpdateEducation = `subscription OnUpdateEducation {
  onUpdateEducation {
    id
    school
  }
}
`;
export const onDeleteEducation = `subscription OnDeleteEducation {
  onDeleteEducation {
    id
    school
  }
}
`;
export const onCreateSkill = `subscription OnCreateSkill {
  onCreateSkill {
    id
    name
  }
}
`;
export const onUpdateSkill = `subscription OnUpdateSkill {
  onUpdateSkill {
    id
    name
  }
}
`;
export const onDeleteSkill = `subscription OnDeleteSkill {
  onDeleteSkill {
    id
    name
  }
}
`;
export const onCreateCertification = `subscription OnCreateCertification {
  onCreateCertification {
    id
    name
    company
    url
  }
}
`;
export const onUpdateCertification = `subscription OnUpdateCertification {
  onUpdateCertification {
    id
    name
    company
    url
  }
}
`;
export const onDeleteCertification = `subscription OnDeleteCertification {
  onDeleteCertification {
    id
    name
    company
    url
  }
}
`;
export const onCreateLanguage = `subscription OnCreateLanguage {
  onCreateLanguage {
    id
    name
  }
}
`;
export const onUpdateLanguage = `subscription OnUpdateLanguage {
  onUpdateLanguage {
    id
    name
  }
}
`;
export const onDeleteLanguage = `subscription OnDeleteLanguage {
  onDeleteLanguage {
    id
    name
  }
}
`;
