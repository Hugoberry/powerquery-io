---
title: Type.OpenRecord
---

# Type.OpenRecord


Retorna una versió oberta del tipus de registre proporcionat (o el mateix tipus, si ja està obert).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Retorna una versió oberta de `record` `type` proporcionat (o el mateix tipus, si ja està obert).


## Examples

### Example #1
Creeu una versió oberta de `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
