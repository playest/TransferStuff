#! /bin/sh

git diff-index --quiet HEAD --

if [ "$?" -ne 0 ]
then
    echo "There is some uncommited changes." >&2
    exit 1
fi