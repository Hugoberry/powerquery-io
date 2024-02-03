---
title: List.Distinct
---

# List.Distinct


## Description

Retorna una llista de valors amb els duplicats suprimits.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Retorna una llista que conté tots els valors de la llista <code>list</code> amb els duplicats suprimits. Si la llista és buida, el resultat és una llista buida.


## Examples

### Example #1 
Permet suprimir els duplicats de la llista \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
