---
title: List.Sum
---

# List.Sum


## Description

Vraća zbir stavki na listi.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Vraća zbir vrednosti sa liste, <code>list</code>, koje nisu bez vrednosti.  Vraća rezultat bez vrednosti ako na listi nema vrednosti koje nisu bez vrednosti.


## Examples

### Example #1 
Pronalaženje zbira brojeva sa liste &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
