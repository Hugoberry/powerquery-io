---
title: List.Transform
---

# List.Transform


## Description

इस सूची से संगणित मानों की नई सूची लौटाता है.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

सूची, <code>list</code> पर ट्रांसफ़ॉर्म फ़ंक्शन <code>transform</code> लागू करके मानों की एक नई सूची लौटाता है.


## Examples

### Example #1 
सूची \{1, 2} के प्रत्येक मान में 1 जोड़ें.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
