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
export const findBlock = `query FindBlock($id: ID!) {
  findBlock(id: $id) {
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
