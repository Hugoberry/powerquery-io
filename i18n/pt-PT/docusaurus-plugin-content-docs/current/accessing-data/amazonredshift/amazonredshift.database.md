---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importar dados de uma base de dados Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela que lista as tabelas no cluster do Amazon Redshift `server` na base de dados `database`. Pode ser especificado um parâmetro de registo opcional, `options`, para controlar as seguintes opções:

-   `Nome do fornecedor`: um valor de texto a utilizar como nome do fornecedor para a ligação. Isto é utilizado quando está a usar a Autenticação Microsoft
.-   `Tamanho do Lote`: O número de linhas que são obtidas numa única chamada ao servidor.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



