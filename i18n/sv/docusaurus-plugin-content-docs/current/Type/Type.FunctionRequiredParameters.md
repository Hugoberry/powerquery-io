---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Returnerar ett nummer som indikerar det minsta antal parametrar som krävs för att anropa den här typen av funktion.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Returnerar ett nummer som indikerar det minsta antal parametrar som krävs för att anropa inmatningen <code>type</code> av funktionen.


## Examples

### Example #1 
Hitta antalet nödvändiga parametrar för funktionen &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
