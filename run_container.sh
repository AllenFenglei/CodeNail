#! /bin/bash
sudo docker run -it --rm -p 3030:3030 -v $PWD:/tmp -w /tmp zllai/csci3100env bash
