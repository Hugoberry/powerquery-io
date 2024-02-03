---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Atgriež skaitli, kas norāda minimālo nepieciešamo parametru skaitu, lai izsauktu funkcijas tipu.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Atgriež skaitli, kas norāda minimālo nepieciešamo parametru skaitu, lai izsauktu funkcijas ievadi <code>type</code>.


## Examples

### Example #1 
Atrodiet funkcijai &lt;code&gt;(x as number, optional y as text)&lt;/code&gt; nepieciešamo parametru skaitu.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
