---
title: List.Sum
---

# List.Sum


## Description

Devolve a suma dos elementos da lista.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Devolve a suma dos valores non nulos da lista, <code>list</code>.  Devolve nulo se non hai valores non nulos na lista.


## Examples

### Example #1 
Buscar a suma dos números da lista &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
