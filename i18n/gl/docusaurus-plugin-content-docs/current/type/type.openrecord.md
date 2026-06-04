---
title: Type.OpenRecord
---

# Type.OpenRecord


Devolve unha versión aberta do tipo de rexistro dado (ou o mesmo tipo, se xa está aberto).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Devolve unha versión aberta do `rexistro` `type` dado (ou o mesmo tipo, se xa está aberto).


## Examples

### Example #1
Crear unha versión aberta de `tipo [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
