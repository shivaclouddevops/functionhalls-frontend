FROM node
RUN apt-get update -y
RUN npm install -g @angular/cli
RUN apt-get install git -y
RUN cd /opt/ && git clone https://github.com/shivaclouddevops/functionhalls-frontend.git
RUN npm install --prefix /opt/functionhalls-frontend/
WORKDIR /opt/functionhalls-frontend/
ENTRYPOINT ["ng","serve","--host","0.0.0.0"]
