FROM oven/bun

WORKDIR /app
COPY . .

RUN bun install --ignore-scripts

RUN bun run build

CMD ["bun","start"]

EXPOSE 3001