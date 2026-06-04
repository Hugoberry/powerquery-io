---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Palauttaa tietueen, jonka kenttien arvot on asetettu funktiotyypin parametrien nimeksi ja joiden arvot niiden vastaaviksi tyypeiksi.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Palauttaa tietueen, jonka kenttien arvot on asetettu kohteen `type` parametrien nimeksi ja joiden arvot niiden vastaaviksi tyypeiksi.


## Examples

### Example #1
Etsi funktion `(x as number, y as text)` parametrien tyypit.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
