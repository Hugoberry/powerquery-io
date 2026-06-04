---
title: Type.RecordFields
---

# Type.RecordFields


Тиісті атауы мен мәні бар берілген жазба түрінің әр өрісімен бірге жазба түрінің өрістерін сипаттайтын жазбаны береді.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

`type` жазбасының өрістерін сипаттайтын жазбаны береді. Берілген жазба түрінің әр өрісінде `[ Type = type, Optional = logical ]` жазбасының пішініндегі тиісті атау мен мән бар.


## Examples

### Example #1
`[ A = number, optional B = any]` жазбасының атауы мен мәнін табыңыз.
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
