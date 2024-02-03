---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Функция түрі бойынша берілген түрді береді.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

<code>type</code> функциясы бойынша берілген түрді береді.


## Examples

### Example #1 
&lt;code&gt;() as any)&lt;/code&gt; берілетін түрін табыңыз.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
