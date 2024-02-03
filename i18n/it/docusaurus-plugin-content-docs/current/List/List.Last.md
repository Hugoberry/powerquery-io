---
title: List.Last
---

# List.Last


## Description

Restituisce l&#39;ultimo valore dell&#39;elenco o, se vuoto, il valore predefinito specificato.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Restituisce l'ultimo elemento dell'elenco <code>list</code> o il valore predefinito facoltativo <code>defaultValue</code>, se l'elenco è vuoto.    Se l'elenco è vuoto e un valore predefinito non è specificato, la funzione restituisce <code>null</code>.


## Examples

### Example #1 
Trovare l&#39;ultimo valore dell&#39;elenco \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Trovare l&#39;ultimo valore dell&#39;elenco \{} o -1 se è vuoto.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
