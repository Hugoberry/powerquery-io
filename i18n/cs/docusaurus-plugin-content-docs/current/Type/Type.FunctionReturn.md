---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Vrátí typ vrácený typem funkce.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Vrátí typ vrácený funkcí <code>type</code>.


## Examples

### Example #1 
Umožňuje najít návratový typ pro &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
