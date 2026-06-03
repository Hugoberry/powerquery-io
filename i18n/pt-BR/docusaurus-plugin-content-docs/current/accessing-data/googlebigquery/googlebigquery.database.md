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

Retorna uma tabela que lista os projetos disponíveis no Google BigQuery. Um parâmetro de registro opcional, `opções`, pode ser especificado para controlar as seguintes opções:

-   `ConnectionTimeout`: uma duração que controla o tempo de espera antes de abandonar uma tentativa de fazer uma conexão com o servidor. O valor padrão é o valor do Tempo Limite da Conexão ODBC.
-   `CommandTimeout`: uma duração que controla por quanto tempo a consulta do lado do servidor tem permissão para ser executada antes de ser cancelada.
-   `BillingProject`: ID do projeto de cobrança. O valor padrão é o primeiro projeto disponível.
-   `UseStorageApi`: especifica se deve ser utilizada a API de Armazenamento do BigQuery para grandes conjuntos de resultados. O valor padrão é true para usar a API de Armazenamento. Defina como false para não usar a API de Armazenamento

O parâmetro de registro será especificado como \[opção1 = valor1, opção2 = valor2...\].


## Examples

### Example #1
Liste os projetos disponíveis no Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



