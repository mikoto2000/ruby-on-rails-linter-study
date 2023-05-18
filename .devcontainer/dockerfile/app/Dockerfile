FROM ruby:3.2.1-bullseye
LABEL maintainer "mikoto2000 <mikoto2000@gmail.com>"

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# rubocop rubocop-rails solargraph は、
# グローバルにインストールしないと上手く動かなかったのでイメージでグローバルインストールしている
RUN gem install rails rubocop rubocop-rails solargraph \
    && npm i -g yarn
