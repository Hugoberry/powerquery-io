---
title: List.Select
---

# List.Select


## Description

शर्त से मेल खाने वाले मानों की एक सूची लौटाता है.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

सूची <code>list</code> के उन मानों को लौटाता है, जो चयन शर्त <code>selection</code> से मेल खाते हैं.


## Examples

### Example #1 
सूची \{1, -3, 4, 9, -2} के वे मान प्राप्त करें जो 0 से बड़े हैं.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
