---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Palauttaa tietueen, jonka kenttien arvot on asetettu funktiotyypin parametrien nimeksi ja joiden arvot niiden vastaaviksi tyypeiksi.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Palauttaa tietueen, jonka kenttien arvot on asetettu kohteen <code>type</code> parametrien nimeksi ja joiden arvot niiden vastaaviksi tyypeiksi.


## Examples

### Example #1 
Etsi funktion &lt;code&gt;(x as number, y as text)&lt;/code&gt; parametrien tyypit.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
