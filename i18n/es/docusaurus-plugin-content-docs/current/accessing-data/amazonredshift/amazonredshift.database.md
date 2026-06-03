---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importar datos de una base de datos de Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla en la que se muestran las tablas del `servidor` de clúster de Amazon Redshift en la base de datos `base de datos`. Se puede especificar un parámetro de registro opcional, `options`, para controlar las siguientes opciones:

-   `Nombre del proveedor`: valor de texto que se usará como nombre del proveedor para la conexión. Se usa cuando se usa Microsoft Authentication.
-   `Tamaño de lote`: el número de filas que se capturan en una sola llamada al servidor.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



