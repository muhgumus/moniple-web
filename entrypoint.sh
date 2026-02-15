#!/bin/sh

# Entrypoint script for moniple-web nginx container

# Start nginx in foreground
exec nginx -g 'daemon off;'
