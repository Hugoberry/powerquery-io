---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Devolve un tipo devolto por un tipo de función.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Devolve un tipo devolto por unha función <code>type</code>.


## Examples

### Example #1 
Busque o tipo de retorno de &lt;code&gt;() como calquera)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
