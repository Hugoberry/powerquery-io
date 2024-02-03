---
title: List.Sum
---

# List.Sum


## Description

Restituisce la somma degli elementi nell&#39;elenco.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Restituisce la somma dei valori non Null nell'elenco <code>list</code>.  Restituisce Null se non sono presenti valori non Null nell'elenco.


## Examples

### Example #1 
Trovare la somma dei numeri nell&#39;elenco &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
