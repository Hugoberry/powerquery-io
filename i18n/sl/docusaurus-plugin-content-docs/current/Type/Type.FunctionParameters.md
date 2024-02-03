---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Vrne zapis z vrednostmi polj, nastavljenimi na imena parametrov vrste funkcije, in njihovimi vrednostmi, nastavljenimi na ustrezne vrste.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Vrne zapis z vrednostmi polj, nastavljenimi na ime parametrov <code>type</code>, in njihovimi vrednostmi, nastavljenimi na ustrezne vrste.


## Examples

### Example #1 
Poiščite vrste parametrov funkcije &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
