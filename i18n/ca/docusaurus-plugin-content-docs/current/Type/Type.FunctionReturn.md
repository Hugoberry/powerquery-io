---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Retorna un tipus que ha retornat un tipus de funció.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Retorna un tipus que ha retornat una funció <code>type</code>.


## Examples

### Example #1 
Cerqueu el tipus de retorn de &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
