---
title: List.Combine
---

# List.Combine


## Description

Vráti jeden zoznam skombinovaním viacerých zoznamov.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Zoberie zoznam zoznamov <code>lists</code> a zlúči ich do jedného nového zoznamu.


## Examples

### Example #1 
Skombinujte dva jednoduché zoznamy \{1, 2} a \{3, 4}.
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
Skombinujte dva zoznamy \{1, 2} a \{3, \{4, 5}}, z ktorého jeden obsahuje vnorený zoznam.
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
