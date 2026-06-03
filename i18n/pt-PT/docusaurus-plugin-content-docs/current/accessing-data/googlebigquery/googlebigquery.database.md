---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importar dados de uma base de dados do Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Devolve uma tabela que lista os projetos disponíveis no Google BigQuery. Pode ser especificado um parâmetro de registo opcional, `options`, para controlar as seguintes opções:

-   `ConnectionTimeout`: uma duração que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido é o valor do tempo limite de ligação ODBC.
-   `CommandTimeout`: uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada.
-   `BillingProject`: ID do projeto de faturação. O valor predefinido é o primeiro projeto disponível.
-   `UseStorageApi`: especifica se a BigQuery Storage API deve ser utilizada para conjuntos de resultados grandes. O valor predefinido é verdadeiro para utilizar a Storage API. Defina como falso para não utilizar a Storage API

O parâmetro do registo é especificado como \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Listar os projetos disponíveis no Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



