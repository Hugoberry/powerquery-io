---
title: List.Sum
---

# List.Sum


## Description

Vráti súčet položiek v zozname.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Vráti súčet hodnôt rôznych od null v zozname <code>list</code>.  Vráti hodnotu null, ak sa v zozname nenachádzajú žiadne hodnoty rôzne od null.


## Examples

### Example #1 
Nájdite súčet čísel v zozname &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
