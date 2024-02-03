---
title: List.Combine
---

# List.Combine


## Description

Kombinuje više lista i vraća jednu listu.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Uzima listu koja se sastoji od lista, <code>lists</code>, i objedinjuje ih u jednu novu listu.


## Examples

### Example #1 
Kombinovanje dve jednostavne liste \{1, 2} i \{3, 4}.
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
Kombinovanje dve liste, \{1, 2} i \{3, \{4, 5}}, od kojih jedna sadrži ugnežđenu listu.
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
