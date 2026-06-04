---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Функция түрі бойынша берілген түрді береді.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

`type` функциясы бойынша берілген түрді береді.


## Examples

### Example #1
`() as any)` берілетін түрін табыңыз.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
