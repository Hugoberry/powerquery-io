---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Pateikiamas funkcijos tipo pateiktas tipas.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Pateikiamas funkcijos <code>type</code> pateiktas tipas.


## Examples

### Example #1 
Raskite &lt;code&gt;() as any)&lt;/code&gt; pateikimo tipą.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
