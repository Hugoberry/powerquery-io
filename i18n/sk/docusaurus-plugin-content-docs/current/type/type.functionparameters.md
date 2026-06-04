---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Vráti záznam s hodnotami poľa nastavený na názov parametrov typu funkcie, a ich hodnoty nastavené na zodpovedajúce typy.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Vráti záznam s hodnotami poľa nastavený na názov parametrov `type`, a ich hodnoty nastavené na zodpovedajúce typy.


## Examples

### Example #1
Nájdi typy parametrov funkcie `(x ako číslo, y ako text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
