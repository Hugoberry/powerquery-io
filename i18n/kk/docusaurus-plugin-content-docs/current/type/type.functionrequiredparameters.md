---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Функция түрін шақыруға қажетті параметрлердің ең кіші санын көрсететін санды береді.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Функцияның `type` кірісін шақыруға қажетті параметрлердің ең кіші санын көрсететін санды береді.


## Examples

### Example #1
`(x as number, optional y as text)` функциясына қажетті параметрлердің санын табыңыз.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
