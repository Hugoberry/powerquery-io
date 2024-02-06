---
title: DataLake.Contents
---

# DataLake.Contents


Escriba la dirección URL de su cuenta de Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Muestra una tabla que contiene una fila para cada carpeta encontrada en la dirección <code>url</code> de Azure Data Lake Storage Gen1. Cada una de las filas contiene propiedades de la carpeta y un vínculo a su contenido.


