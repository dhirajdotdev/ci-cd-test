FROM node:24-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY index.js index.js

RUN pnpm install

CMD ["node", "index"]
