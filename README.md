# Klutch Front-End Challenge

---

# Instalação

### Passo-a-passo

1. Instalar os pacotes necessários.

```
npm install
```

2. Executar o servidor local.

```
npm run dev
```

3. Altere o campo "baseUrl" do arquivo **_.src/services/api.ts_**

```bash
# Para fazer requisições a partir de API rodando no servidor local.
baseURL: "http://127.0.0.1:8000/api",

# Para fazer requisições a partir de API rodando no servidor externo.
baseURL: "https://klutch-challenge.onrender.com/api",
```

## Lista de URLs

```bash
http://localhost:3000
http://localhost:3000/apply-for-loan
http://localhost:3000/loan-details

# Ou

https://klutch-challenge.onrender.com
https://klutch-challenge.onrender.com/apply-for-loan
https://klutch-challenge.onrender.com/loan-details
```
