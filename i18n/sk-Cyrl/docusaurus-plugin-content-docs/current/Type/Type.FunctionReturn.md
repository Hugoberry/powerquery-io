---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Vráti typ vrátený typom funkcie.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Vráti typ vrátený funkciou <code>type</code>.


## Examples

### Example #1 
Nájdi typ návratu &lt;code&gt;() ako ľubovoľné)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
