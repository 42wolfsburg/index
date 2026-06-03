#!/bin/bash

SRC_HASH=$(find src/ -type f | sort | xargs md5sum | md5sum | awk '{print $1}')
HASH_FILE=".src_hash"

if [ -f "$HASH_FILE" ] && [ "$(cat $HASH_FILE)" = "$SRC_HASH" ]; then
    echo "No changes detected, skipping build."
    exit 0
fi

echo "Changes detected, building..."
npm run build
sudo rm -rf /var/www/index-app/*
sudo cp -r dist/* /var/www/index-app/

echo $SRC_HASH > $HASH_FILE
echo "Done."
