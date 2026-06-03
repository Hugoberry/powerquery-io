---
title: Parquet.Document
---

# Parquet.Document


Devuelve el contenido del documento de Parquet como una tabla.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Devuelve el contenido del documento Parquet como una tabla. Las opciones incluyen:

-   `TypeMapping`: valor de texto que controla la asignación de tipos predeterminada al leer y escribir archivos. El valor predeterminado es null e intenta conservar la mayor fidelidad posible al tipo original. El valor de "Sql" producirá resultados más compatibles con SQL Server.



## Category
Acceso a los datos
