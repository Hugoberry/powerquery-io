---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Devolve um tipo devolvido por um tipo de função.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Devolve um tipo devolvido por uma função <code>type</code>.


## Examples

### Example #1 
Encontrar o tipo de retorno de &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
