---
title: List.Repeat
---

# List.Repeat


Vrne seznam, ki vsebuje"count"ponovitev izvirnega seznama.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Vrne seznam, ki vsebuje `count` ponovitev izvirnega seznama, `list`.


## Examples

### Example #1
Ustvarite seznam, v katerem se \{1, 2\} ponovi trikrat.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
