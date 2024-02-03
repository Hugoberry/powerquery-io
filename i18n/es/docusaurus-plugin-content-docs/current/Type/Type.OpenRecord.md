---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Devuelve una versión abierta del tipo de registro proporcionado (o el mismo tipo, si ya está abierto).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Devuelve una versión abierta del <code>record</code> <code>type</code> proporcionado (o el mismo tipo, si ya está abierto).


## Examples

### Example #1 
Crear una versión abierta de &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
