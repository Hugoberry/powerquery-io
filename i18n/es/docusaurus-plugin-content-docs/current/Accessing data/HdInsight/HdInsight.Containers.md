---
title: HdInsight.Containers
---

# HdInsight.Containers


Devuelve una tabla de navegación que contiene los contenedores encontrados en la cuenta especificada de un depósito de Azure.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Remarks

Devuelve una tabla de navegación que contiene una fila por cada contenedor encontrado en la dirección URL de la cuenta, <code>account</code>, de un depósito de Azure. Cada fila contiene un vínculo a los blobs del contenedor.



## Category
Accessing data
