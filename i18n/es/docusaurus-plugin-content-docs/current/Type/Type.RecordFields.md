---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Devuelve un registro que describe los campos de un tipo de registro, y cada campo del tipo de registro devuelto tiene un nombre y un valor correspondientes.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Devuelve un registro que describe los campos de un registro <code>type</code>. Cada campo del tipo de registro tiene un nombre y un valor correspondientes, en forma de un registro <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Buscar el nombre y el valor del registro &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
