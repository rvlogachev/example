FROM rabbitmq:3.10.7-management
# Define environment variables.
#ENV RABBITMQ_USER rmuser
#ENV RABBITMQ_PASSWORD 7)jz_gdF1f}L|xcC
#RUN export RABBITMQ_PASSWORD=$(echo /run/secrets/rabbitmq_password)
ENV RABBITMQ_PID_FILE /var/lib/rabbitmq/mnesia/rabbitmq
#ENV RABBITMQ_DEFAULT_VHOST /
#ENV RABBITMQ_SERVER_ADDITIONAL_ERL_ARGS -rabbit disk_free_limit 2147483648
ADD init.sh /init.sh
RUN chmod +x /init.sh
EXPOSE 15672
# Define default command
CMD ["/init.sh"]