---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Vraća broj koji označava minimalni broj parametara potrebnih za pozivanje tipa funkcije.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Vraća broj koji označava minimalni broj parametara potrebnih za pozivanje ulaza <code>type</code> za funkciju.


## Examples

### Example #1 
Pronađite broj potrebnih parametara za funkciju &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
