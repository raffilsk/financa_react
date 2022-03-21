import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'
import './styles/global.css'

createServer({
  models: {
    operation: Model,
  },

  seeds(server){
    server.db.loadData({
      operations: [
        {
          id: 1,
          title: "Salario",
          category: "Job",
          type: "entrada",
          amount: 7250,
          date: new Date("2022-02-05 00:01:00")

        },
        {
          id: 2,
          title: "Aluguel",
          category: "Despesas",
          type: "saida",
          amount: 1200,
          date: new Date("2022-02-10 00:01:00")

        },
        {
          id: 3,
          title: "Mercado",
          category: "Compras",
          type: "saida",
          amount: 550,
          date: new Date("2022-02-15 00:01:00")

        }
      ]
    })

  },

  routes(){
    this.namespace = "api";

    this.get('/operations', () => {
      return this.schema.all('operation');
    })

    this.post('/operations', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('operation', data)

    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
