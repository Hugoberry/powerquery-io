---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importe dados de uma base de dados Google BigQuery com o Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela que lista os projetos disponíveis no Google BigQuery ao utilizar o Microsoft Entra ID para o `Billing Project ID` . Pode ser especificado um parâmetro de registo opcional, `options`, para controlar as seguintes opções:

-   `ConnectionTimeout`: uma duração que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido é o valor do tempo limite de ligação ODBC.
-   `CommandTimeout`: uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada.
-   `UseStorageApi`: especifica se a BigQuery Storage API deve ser utilizada para conjuntos de resultados grandes. O valor predefinido é verdadeiro para utilizar a Storage API. Defina como falso para não utilizar a Storage API
-   `AudienceUri`: este é o URI de público que o controlador ODBC pode utilizar para os seus pedidos de troca de tokens. Este campo tem de ser um URI completamente qualificado (ou seja, //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) em que o pool\_id é um nome globalmente exclusivo para identificar o conjunto da equipa de trabalhadores.

O parâmetro do registo é especificado como \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Listar os projetos disponíveis no Google BigQuery com o Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



