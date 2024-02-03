---
title: List.Buffer
---

# List.Buffer


## Description

Emmagatzema una llista a la memòria intermèdia.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Emmagatzema la llista <code>list</code> a la memòria intermèdia. El resultat d'aquesta crida és una llista estable.


## Examples

### Example #1 
Crea una còpia estable de la llista \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
