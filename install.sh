#!/bin/bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose-v2 git
sudo systemctl enable --now docker
cd ~
rm -rf conecta-oportunidades
git clone https://github.com/LUIZLPM31/conecta-oportunidades.git
cd conecta-oportunidades
echo "DB_HOST=db.yslnkadgfwnljmlquyst.supabase.co" > .env
echo "DB_PORT=5432" >> .env
echo "DB_NAME=postgres" >> .env
echo "DB_USER=postgres" >> .env
echo "DB_PASSWORD=Heitornoah3128" >> .env
echo "JWT_SECRET=conecta-oportunidades-secret-key-muito-segura-2024" >> .env
sudo docker compose up -d --build
