---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Egy function típus paramétereinek nevéből álló rekord visszaadása. A rekord mezőinek értéke a paraméterek típusával azonos.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

A(z) <code>type</code> paraméterben megadott függvény típusú konstrukció paramétereinek nevéből álló rekord visszaadása. A rekord mezőinek értéke a paraméterek típusával azonos.


## Examples

### Example #1 
Az &lt;code&gt;(x as number, y as text)&lt;/code&gt; függvény paramétertípusainak megkeresése.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
