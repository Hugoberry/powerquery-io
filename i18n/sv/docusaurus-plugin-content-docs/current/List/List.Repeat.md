---
title: List.Repeat
---

# List.Repeat


Returnerar en lista som är antalet repetitioner av den ursprungliga listan.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Returnerar en lista som är <code>count</code> repetitioner av den ursprungliga listan, <code>list</code>.


## Examples

### Example #1 
Skapa en lista där \{1, 2} upprepas 3 gånger.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
