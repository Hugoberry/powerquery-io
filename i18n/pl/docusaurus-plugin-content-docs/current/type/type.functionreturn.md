---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Zwraca typ zwrócony przez typ funkcji.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Zwraca typ zwrócony przez funkcję <code>type</code>.


## Examples

### Example #1 
Znajdź typ zwracany &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
