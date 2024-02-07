---
title: DataLake.Files
---

# DataLake.Files


Escriba la dirección URL de su cuenta de Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Muestra una tabla que contiene una fila para cada archivo encontrado en la dirección <code>url</code>, de Azure Data Lake Storage Gen1. Cada una de las filas contiene propiedades del archivo y un vínculo a su contenido.


