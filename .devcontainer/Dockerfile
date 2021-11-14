FROM nebulatgs/android-devcontainer

# FROM mcr.microsoft.com/vscode/devcontainers/universal:linux as builder
# USER root

# # Magic DNS in a container where /etc/resolv.conf is a bind mount needed
# # extra support, currently on a development branch.
# WORKDIR /go/src/tailscale
# COPY . ./
# RUN git clone https://github.com/tailscale/tailscale.git && cd tailscale && \
#     go mod download && \
#     go install -mod=readonly ./cmd/tailscaled ./cmd/tailscale
# COPY . ./


# FROM mcr.microsoft.com/vscode/devcontainers/universal:linux

# USER root

# RUN apt-get update && apt-get install -y curl gpg dnsutils
# COPY tailscaled /etc/init.d
# COPY --from=builder /go/bin/tailscaled /usr/sbin/tailscaled
# COPY --from=builder /go/bin/tailscale /usr/bin/tailscale

# RUN mkdir -p /var/run/tailscale /var/cache/tailscale /var/lib/tailscale

# # Hack to get openjdk to install in a container
# RUN mkdir -p /usr/share/man/man1 \
#     && mkdir -p /usr/share/man/man7

# # Android SDK
# # RUN wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
# RUN wget https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip 
# RUN mkdir android-sdk && unzip /commandlinetools-linux-7583922_latest.zip -d android-sdk
# RUN rm /commandlinetools-linux-7583922_latest.zip 
# ENV ANDROID_HOME="/android-sdk"
# ENV PATH="/android-sdk/tools/bin:/android-sdk/build-tools:/android-sdk/platform-tools:${PATH}"

# # SDK manager
# RUN yes | sdkmanager --licenses
# RUN sdkmanager "platforms;android-30" "platform-tools" "build-tools;30.0.0"

# # Set a useful default shell
# ENV SHELL /bin/bash

