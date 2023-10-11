#!/bin/sh
# Create Rabbitmq user
value=`cat /run/secrets/rabbitmq_default_pass`

( rabbitmqctl wait --timeout 3600000 $RABBITMQ_PID_FILE ; \
rabbitmqctl add_user $RABBITMQ_USER "$value"  2>/dev/null ; \
rabbitmqctl set_user_tags $RABBITMQ_USER administrator ; \
rabbitmqctl set_permissions -p / $RABBITMQ_USER  ".*" ".*" ".*" ; \
rabbitmqctl delete_user guest ; \
#echo "*** User '$RABBITMQ_USER' with password "$value" completed. ***" ; \
echo "*** Success ***") &
# $@ is used to pass arguments to the rabbitmq-server command.
# For example if you use it like this: docker run -d rabbitmq arg1 arg2,
# it will be as you run in the container rabbitmq-server arg1 arg2
rabbitmq-server $@