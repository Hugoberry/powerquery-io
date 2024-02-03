---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Importa datos dunha base de datos de Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa que enumera as táboas do <code>servidor</code> do clúster de Amazon Redshift na <code>base de datos</code> da base de datos. Pódese especificar un parámetro de rexistro opcional, <code>opcións</code>, para controlar as seguintes opcións:<ul><li><code>Nome do fornecedor</code>: un valor de texto para usar como nome do fornecedor para a conexión. Isto úsase cando se usa a autenticación de Microsoft.</li><li><code>Tamaño do lote</code>:O número de filas que se obteñen nunha única chamada ao servidor.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



