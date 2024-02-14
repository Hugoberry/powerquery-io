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

Restituisce un tipo restituito da un <code>type</code> di funzione.


## Examples

### Example #1 
Trovare il tipo restituito di &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
