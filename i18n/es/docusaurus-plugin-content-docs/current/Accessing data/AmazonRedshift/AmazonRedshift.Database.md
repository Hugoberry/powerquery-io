---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Importar datos de una base de datos de Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devuelve una tabla en la que se muestran las tablas del <code>servidor</code> de clúster de Amazon Redshift en la base de datos <code>base de datos</code>.  Se puede especificar un parámetro de registro opcional, <code>opciones</code>, para controlar las siguientes opciones:<ul><li><code>Nombre de proveedor</code>: un valor de texto que se usará como nombre del proveedor para la conexión. Se usa cuando se usa Microsoft Authentication.</li><li><code>Tamaño de lote</code>: el número de filas que se capturan en una sola llamada al servidor.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



