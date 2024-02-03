---
title: Hdfs.Contents
---

# Hdfs.Contents


## Description

Devuelve una tabla que contiene las propiedades y el contenido de las carpetas y los archivos encontrados en la carpeta especificada del sistema de archivos Hadoop.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Details

Devuelve una tabla que contiene una fila para cada carpeta y archivo encontrados en la dirección URL de la carpeta, <code>url</code>, de un sistema de archivos Hadoop. Cada fila contiene las propiedades de la carpeta o el archivo y un vínculo a su contenido.



## Category
Accessing data
