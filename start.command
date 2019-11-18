path="`dirname \"$0\"`"
npm run build
cd "$path/configuration"
docker-compose up