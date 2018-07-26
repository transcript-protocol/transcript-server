# transcript-server

This repo is the NodeJS server for EmblemEDU.
THIS REPO HAS BEEN MADE OBSOLETE! 
We thank this repository for its service, but it is out of our controller to replace it as our server. 
Check out the behemoth repo that is [emblem-site](https://github.com/transcript-protocol/emblem-site)! It's where we're doing all of our development now.

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
2. When running unit tests, comment-out unwanted tests as necessary. When done, un-comment-out unwanted tests to ensure all unit tests will run the next time. This will ensure that whenever someone forks the repository and runs `yarn test` they'll immediately know if there are any problems with the way the code has been set up. 
