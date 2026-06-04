---
title: List.Repeat
---

# List.Repeat


Vrátí seznam obsahující určený počet opakování původního seznamu.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Vrátí seznam který obsahuje `count` opakování původního seznamu `list`.


## Examples

### Example #1
Vytvoří seznam, který obsahuje 3 opakování seznamu \{1, 2\}.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
