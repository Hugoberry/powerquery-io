---
title: List.Product
---

# List.Product


## Description

सूची की संख्याओं का उत्पाद लौटाता है.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

सूची, <code>numbersList</code> की गैर-नल संख्याओं का उत्पाद लौटाता है. सूची में गैर-नल मान न होने पर नल लौटाता है.


## Examples

### Example #1 
सूची &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; की संख्याओं का उत्पाद प्राप्त करें.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
