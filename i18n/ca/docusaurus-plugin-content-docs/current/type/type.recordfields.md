---
title: Type.RecordFields
---

# Type.RecordFields


Retorna un registre que descriu els camps d'un tipus de registre amb cada camp del tipus de registre retornat que té un nom i un valor corresponents.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Retorna un registre que descriu els camps d'un registre `type`. Cada camp del tipus de registre retornat té un nom i un valor corresponent, amb la forma d'un registre `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Cerqueu el nom i el valor del registre `[ A = number, optional B = any]`.
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
