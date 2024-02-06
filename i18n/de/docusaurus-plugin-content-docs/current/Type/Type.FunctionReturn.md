---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Gibt einen von einem Funktionstyp zurückgegebenen Typ an.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Gibt einen von einer Funktion <code>type</code> zurückgegebenen Typ an.


## Examples

### Example #1 
Suchen Sie den Rückgabetyp von &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
