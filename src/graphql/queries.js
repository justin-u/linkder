// eslint-disable
// this is an auto generated file. This will be overwritten

export const findUser = `query FindUser($id: ID!) {
  findUser(id: $id) {
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
export const getPlacetime = `query GetPlacetime($id: ID!) {
  getPlacetime(id: $id) {
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
export const listPlacetimes = `query ListPlacetimes(
  $filter: ModelPlacetimeFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlacetimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      nodes {
        nextToken
      }
    }
    nextToken
  }
}
`;
