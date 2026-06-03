---
title: Type.RecordFields
---

# Type.RecordFields


Returnerar en post som beskriver en posttyps fält där varje fält för den returnerade posttypen har ett motsvarande namn och värde.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Returnerar en post som beskriver fälten för en post `type`. Varje fält av den returnerade posttypen har ett motsvarande namn och ett värde, i formen av en post `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Hitta namnet och värdet för posten `[ A = number, optional B = any]`.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
