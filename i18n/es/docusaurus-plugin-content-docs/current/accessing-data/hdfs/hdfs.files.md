---
title: Hdfs.Files
---

# Hdfs.Files


Devuelve una tabla que contiene las propiedades y el contenido de los archivos encontrados en la carpeta y las subcarpetas especificadas del sistema de archivos Hadoop.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Remarks

Devuelve una tabla que contiene una fila para archivo encontrado en la dirección URL de la carpeta, <code>url</code>, y las subcarpetas de un sistema de archivos Hadoop. Cada fila contiene las propiedades del archivo y un vínculo a su contenido.



## Category
Accessing data
