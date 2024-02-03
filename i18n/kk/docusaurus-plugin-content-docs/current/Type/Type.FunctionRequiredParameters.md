---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Функция түрін шақыруға қажетті параметрлердің ең кіші санын көрсететін санды береді.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Функцияның <code>type</code> кірісін шақыруға қажетті параметрлердің ең кіші санын көрсететін санды береді.


## Examples

### Example #1 
&lt;code&gt;(x as number, optional y as text)&lt;/code&gt; функциясына қажетті параметрлердің санын табыңыз.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
