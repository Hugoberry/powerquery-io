---
title: Parquet.Document
---

# Parquet.Document


## Description

Devuelve el contenido del documento de Parquet como una tabla.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Devuelve el contenido del documento Parquet como una tabla. Las opciones incluyen: 
    <ul>
    <li> <code>TypeMapping</code>: valor de texto que controla la asignación de tipos predeterminada al leer y escribir archivos. El valor predeterminado es null e intenta conservar la mayor fidelidad posible al tipo original. El valor de "Sql" producirá resultados más compatibles con SQL Server.</li>
    </ul>



## Category
Acceso a los datos
