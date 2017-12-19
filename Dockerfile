FROM ubuntu:16.04

# AWS CLI needs the PYTHONIOENCODING environment varialbe to handle UTF-8 correctly:
ENV PYTHONIOENCODING=UTF-8

RUN apt-get update
RUN apt-get install -y \
    python \
    python-pip \
    build-essential \
    sudo \
    curl

RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

RUN pip install --upgrade pip
RUN pip install awscli