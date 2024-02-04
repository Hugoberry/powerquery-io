---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Entfernt alle NULL-Werte aus der angegebenen Liste.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Entfernt alle Vorkommen von NULL-Werten aus "<code>list</code>". Enthält die Liste keine NULL-Werte, wird die ursprüngliche Liste zurückgegeben.


## Examples

### Example #1 
Entfernt die NULL-Werte aus der Liste &#34;\{1, 2, 3, null, 4, 5, null, 6}&#34;.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
