---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Devuelve una tabla que contiene las propiedades y el contenido de los blobs encontrados en el contenedor especificado de un depósito de Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Devuelve una tabla que contiene una fila por cada archivo de blob encontrado en la dirección URL del contenedor, <code>account</code>, de un depósito de Azure. Cada fila contiene las propiedades del archivo y un vínculo a su contenido.



## Category
Accessing data
