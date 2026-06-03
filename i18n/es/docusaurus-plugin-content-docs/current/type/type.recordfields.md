---
title: Type.RecordFields
---

# Type.RecordFields


Devuelve un registro que describe los campos de un tipo de registro, y cada campo del tipo de registro devuelto tiene un nombre y un valor correspondientes.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Devuelve un registro que describe los campos de un registro `type`. Cada campo del tipo de registro tiene un nombre y un valor correspondientes, en forma de un registro `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Buscar el nombre y el valor del registro `[ A = number, optional B = any]`.
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
