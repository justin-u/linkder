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
