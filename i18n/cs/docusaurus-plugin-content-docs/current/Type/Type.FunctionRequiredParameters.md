---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Vrátí číslo určující minimální počet parametrů požadovaných pro vyvolání typu funkce.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Vrátí číslo určující minimální počet parametrů požadovaných pro vyvolání vstupu <code>type</code> funkce.


## Examples

### Example #1 
Umožňuje najít počet parametrů požadovaných pro funkci &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
