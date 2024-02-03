---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Atgriež tipu, ko atgrieza funkcijas tips.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Atgriež tipu, ko atgrieza funkcija <code>type</code>.


## Examples

### Example #1 
Atrodiet &lt;code&gt;() as any)&lt;/code&gt; atgriešanas tipu.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
