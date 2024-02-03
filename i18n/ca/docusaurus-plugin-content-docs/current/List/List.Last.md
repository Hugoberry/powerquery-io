---
title: List.Last
---

# List.Last


## Description

Retorna el darrer valor de la llista o el valor per defecte especificat si és buit.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Retorna el darrer element de la llista <code>list</code>, o el valor per defecte opcional, <code>defaultValue</code>, si la llista és buida.    Si la llista és buida i no s'especifica cap valor per defecte, la funció retorna el valor <code>null</code>.


## Examples

### Example #1 
Troba el darrer valor de la llista \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Troba el darrer valor de la llista \{} o -1 si és buida.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
