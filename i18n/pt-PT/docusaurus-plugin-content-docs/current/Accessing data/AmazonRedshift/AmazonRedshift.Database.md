---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Importar dados de uma base de dados Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devolve uma tabela que lista as tabelas no cluster do Amazon Redshift <code>server</code> na base de dados <code>database</code>.  Pode ser especificado um parâmetro de gravação opcional, <code>options</code>, para controlar as seguintes opções:<ul><li><code>Provider Name</code>: um valor de texto a utilizar como Nome do Fornecedor para a ligação. Isto é aplicado ao utilizar a Autenticação Microsoft.</li><li><code>Batch Size</code>: o número de linhas que são obtidas numa única chamada para o server.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



