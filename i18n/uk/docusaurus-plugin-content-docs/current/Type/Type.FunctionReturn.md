---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Повертає тип, який повертається за допомогою типу функції.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Повертає тип, який повертається за допомогою функції <code>type</code>.


## Examples

### Example #1 
Знайти тип повернення &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
