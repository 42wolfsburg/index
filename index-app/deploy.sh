#!/bin/bash

export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

PROJECT_DIR="/root/index/index-app"
SRC_HASH=$(find $PROJECT_DIR/src/ -type f | sort | xargs md5sum | md5sum | awk '{print $1}')
HASH_FILE="$PROJECT_DIR/.src_hash"

if [ -f "$HASH_FILE" ] && [ "$(cat $HASH_FILE)" = "$SRC_HASH" ]; then
    echo "No changes detected, skipping build."
    exit 0
fi

echo "Changes detected, building..."
cd $PROJECT_DIR && npm run build
sudo rm -rf /var/www/index-app/*
sudo cp -r $PROJECT_DIR/dist/* /var/www/index-app/

echo $SRC_HASH > $HASH_FILE
echo "Done."
