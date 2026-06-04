---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importa datos dunha base de datos de Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa que enumera as táboas do `servidor` do clúster de Amazon Redshift na `base de datos` da base de datos. Pode que se especifique un parámetro de rexistro opcional (`opcións`) para controlar as seguintes opcións:

-   `Nome do fornecedor`: un valor de texto a utilizar como Nome do Fornecedor para a conexión. Utilízase cando se utiliza a autenticación de Microsoft.
-   `Tamaño do lote`: o número de filas que se obteñen nunha soa chamada ao servidor.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



