#!/bin/bash
# testFile="$1"
# if [ ! $1 ]; then
#     echo "✋ Test file is to be passed"
#     exit 1
# fi
go build cookieselection.go
buildStatus="$?"
if [[ "$buildStatus" != 0 ]]; then
    exit 1
fi
touch "output"
touch "error"
for i in test/*.in.txt; do
    ./cookieselection < "$i" 1> "output" 2> "error"
    exit_status="$?"
    if [[ "$exit_status" != 0 ]]; then
        echo "$i: ❌"
        cat "error"
    elif ! diff -u --ignore-all-space "output" "${i:0:10}.out.txt"; then
        echo "$i: ❌"
        echo "Actual resut don't match expected ↑"
    else
        echo "$i: ✅" 
    fi
done
rm "error"
# rm "output"
