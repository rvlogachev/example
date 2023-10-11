FROM postgres:14.1

RUN echo "=============POSTGRESQL================================"

COPY ./common/postgresql-common.txt /etc/logrotate.d/postgresql-common

#COPY ./ssl/vmshqebitda01.crt /var/lib/postgrsql/certs/vmshqebitda01.crt

#RUN echo 'max_execution_time = 600' >> /usr/local/etc/php/conf.d/docker-php-maxexectime.ini;
#RUN chmod 777 /var/lib/postgrsql/certs/vmshqebitda01.key \
#        /var/lib/postgrsql/certs/vmshqebitda01.crt

#WORKDIR /var/lib/postgrsql
