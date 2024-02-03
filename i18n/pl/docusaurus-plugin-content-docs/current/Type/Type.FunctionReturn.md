---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Zwraca typ zwrócony przez typ funkcji.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

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
