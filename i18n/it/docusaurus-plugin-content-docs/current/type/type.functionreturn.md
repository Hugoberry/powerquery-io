---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Restituisce un tipo restituito da un tipo di funzione.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Restituisce un tipo restituito da un `type` di funzione.


## Examples

### Example #1
Trovare il tipo restituito di `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
