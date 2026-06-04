---
title: List.Zip
---

# List.Zip


Olyan listákat sorol fel, amelyek az ugyanabban a pozícióban található elemek egyesítésével alakulnak ki.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Remarks

Felvesz egy listákból álló `lists` listát, illetve olyan listákat sorol fel, amelyek az ugyanabban a pozícióban található elemek egyesítésével alakulnak ki.


## Examples

### Example #1
Két egyszerű listát (\{1, 2\} és \{3, 4\}) tömörít.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2
Két, egymástól eltérő hosszúságú egyszerű listát (\{1, 2\} és \{3\}) tömörít.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
