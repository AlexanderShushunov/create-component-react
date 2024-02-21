#!/bin/bash

if ! git diff-index --quiet HEAD --; then
    echo "Uncommitted changes detected. Please commit or stash them before running this script."
    exit 1
fi

npm version patch -m "change version to %s"

npm publish --access public

# Check if npm publish was successful
if [ $? -ne 0 ]; then
  echo "npm publish failed."
  exit 1
fi

git push origin && git push origin --tags
