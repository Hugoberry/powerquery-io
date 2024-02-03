---
title: List.Combine
---

# List.Combine


## Description

Több lista kombinálásával egyetlen listát ad vissza.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Listák listájából (<code>lists</code>) kiindulva egyetlen új listává fűzi össze azokat.


## Examples

### Example #1 
Két egyszerű lista (\{1, 2} és \{3, 4}) összevonása
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
Két lista (\{1, 2} és \{3, \{4, 5}}) összevonása, amelyek közül az egyik egy beágyazott listát is tartalmaz
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
