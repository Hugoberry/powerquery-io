---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importe dados de um banco de dados Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

      Retorna uma tabela listando os projetos disponíveis no Google BigQuery. Um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as seguintes opções:      <ul>        <li><code>ConnectionTimeout</code>: uma duração que controla quanto tempo esperar antes de abandonar uma tentativa de fazer uma conexão com o servidor. O valor padrão é o valor de Tempo Limite de Conexão ODBC.</li>        <li><code>CommandTimeout</code>: uma duração que controla por quanto tempo a consulta do lado do servidor pode ser executada antes de ser cancelada.</li>        <li><code>BillingProject</code>: ID do projeto de cobrança. O valor padrão é o primeiro projeto disponível.</li>        <li><code>UseStorageApi</code>: especifica se a API de Armazenamento do BigQuery deve ser usada para grandes conjuntos de resultados. O valor padrão é true para usar a API de Armazenamento. Defina como false para não usar a API de Armazenamento</li>      </ul>    O parâmetro de registro é especificado como [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Liste os projetos disponíveis no Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



