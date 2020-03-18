#!/bin/sh

ORIG_MSG_FILE_PATH=$1

cat ./githooks/commit-template.txt > "$ORIG_MSG_FILE_PATH"
