#!/usr/bin/python3

import cgi
import subprocess
import time

print("content-type: text/html")
print()


form = cgi.FieldStorage()
operation = form.getvalue("op")

if operation == 'create_container':
    image = form.getvalue("image")
    options = form.getvalue("options")
    container = form.getvalue("container-name")
    output = subprocess.getoutput('sudo docker create {} --name {} {}'.format(options,container,image))
elif operation == 'run_container':
    image = form.getvalue("image")
    options = form.getvalue("options")
    container = form.getvalue("container-name")
    output = subprocess.getoutput('sudo docker run {} --name {} {}'.format(options,container,image))
elif operation == 'stop_container':
    options = form.getvalue("options")
    container = form.getvalue("container-name")
    output = subprocess.getoutput('sudo docker stop {} {}'.format(options,container)
elif operation == 'docker_copy':
    dest = form.getvalue("dest-path")
    src = form.getvalue("src-path")
    container = form.getvalue("container-name")
    output = subprocess.getoutput('sudo docker cp {}:{} {}'.format(container,src,dest)
elif operation == 'running_container_info':
    options = form.getvalue("options")
    output = subprocess.getoutput('sudo docker ps {}'.format(options)
elif operation == 'all_images':
    options = form.getvalue("options")
    output = subprocess.getoutput('sudo docker images {}'.format(options)

