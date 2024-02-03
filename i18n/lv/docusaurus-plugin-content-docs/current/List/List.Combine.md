---
title: List.Combine
---

# List.Combine


## Description

Tiek atgriezts viens saraksts, kas ir izveidots, apvienojot vairākus sarakstus.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Tiek apstrādāts sarakstu saraksts <code>lists</code> un šie saraksti tiek sapludināti vienā jaunā sarakstā.


## Examples

### Example #1 
Apvienojiet šos divus vienkāršos sarakstus: \{1, 2} un \{3, 4}.
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
Apvienojiet šos divus sarakstus: \{1, 2} un \{3, \{4, 5}}, vienā no kuriem ir ietverts ligzdots saraksts.
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
