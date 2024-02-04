---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Importar dados de uma base de dados do Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Devolve uma tabela que lista os projetos disponíveis no Google BigQuery. Pode especificar um parâmetro de registo opcional, <code>options</code>, para controlar as opções seguintes:      <ul>        <li><code>ConnectionTimeout</code>: Uma duração que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido é o valor do Tempo Limite de Ligação ODBC.</li>        <li><code>CommandTimeout</code>: Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada.</li>        <li><code>BillingProject</code>: O id do projeto de faturação. O valor predefinido é o primeiro projeto disponível.</li>        <li><code>UseStorageApi</code>: Especifica se a API BigQuery Storage deve ser utilizada para conjuntos de resultados grandes. O valor predefinido é true para utilizar a API Storage. Defina como false para não utilizar a API Storage</li>      </ul>    O parâmetro do registo é especificado como [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Listar os projetos disponíveis no Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



