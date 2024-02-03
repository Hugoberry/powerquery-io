---
title: List.First
---

# List.First


## Description

Retorna el primer valor de la llista o el valor per defecte especificat si és buit.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Retorna el primer element de la llista <code>list</code>, o el valor per defecte opcional, <code>defaultValue</code>, si la llista és buida.    Si la llista és buida i no s'especifica cap valor per defecte, la funció retorna el valor <code>null</code>.


## Examples

### Example #1 
Troba el primer valor de la llista \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Troba el primer valor de la llista \{}. Si la llista és buida, es retorna el valor -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
