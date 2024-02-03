---
title: List.Combine
---

# List.Combine


## Description

Returnează o singură listă prin combinarea mai multor liste.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Preia o listă de liste, <code>lists</code>, şi le îmbină într-o singură listă nouă.


## Examples

### Example #1 
Combinaţi cele două liste simple \{1, 2} şi \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Combinaţi cele două liste, \{1, 2} şi \{3, \{4, 5}}, dintre care una conţine o listă imbricată.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
