---
title: List.Last
---

# List.Last


Retorna el darrer valor de la llista o el valor per defecte especificat si és buit.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Retorna el darrer element de la llista especificada o el valor per defecte opcional si la llista està buida.

-   `list`: la llista que s'ha d'examinar.
-   `defaultValue`: (Opcional) El valor per defecte que es retornarà si la llista està buida. Si la llista està buida i no s'especifica cap valor per defecte, la funció retorna `null`.


## Examples

### Example #1
Troba el darrer valor de la llista \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Troba el darrer valor de la llista \{\} o -1 si és buida.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
