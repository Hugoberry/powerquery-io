---
title: List.Sum
---

# List.Sum


## Description

Devolve a soma dos itens existentes na lista.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Devolve a soma dos valores não nulos existentes na lista, <code>list</code>.  Devolve nulo se não existirem valores não nulos na lista.


## Examples

### Example #1 
Determinar a soma dos números existentes na lista &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
