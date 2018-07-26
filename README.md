# transcript-server

This repo is the NodeJS server for EmblemEDU.

# Setup

1. Clone this repo
2. Install yarn (on MacOS: `brew install yarn`)
3. Install MongoDB (on MacOS: `brew install mongodb`)
4. Go into the repo and run `yarn install`

# Testing

1. In a separate window, start MongoDB with `mongod`
2. Run `yarn test`

# Usage
1.  Please note that our put request does not allow for update of primary identifier at the moment. Usernames, SchoolIDs, and HashValues cannot be updated with our put requests as written.