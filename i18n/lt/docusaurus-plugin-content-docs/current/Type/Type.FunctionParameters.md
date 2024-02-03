---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Pateikiamas įrašas, kurio laukų reikšmės yra funkcijos tipo parametrų pavadinimai ir nustatytos atitinkamos tipų reikšmės.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Pateikiamas įrašas, kurio laukų reikšmės yra <code>type</code> parametrų pavadinimai ir nustatytos atitinkamos tipų reikšmės.


## Examples

### Example #1 
Raskite funkcijos &lt;code&gt;(x as number, y as text)&lt;/code&gt; parametrų tipus.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
