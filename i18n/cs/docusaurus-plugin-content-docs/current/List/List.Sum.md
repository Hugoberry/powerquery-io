---
title: List.Sum
---

# List.Sum


## Description

Vrátí součet položek v seznamu.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Vrátí součet položek v seznamu <code>list</code>, které nemají hodnotu null.  Pokud seznam neobsahuje jiné hodnoty než null, vrátí hodnotu null.


## Examples

### Example #1 
Vrátí součet čísel v seznamu &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
