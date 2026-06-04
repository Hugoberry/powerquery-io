---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Vrátí záznam s hodnotami pole nastavenými na název parametrů typu funkce a jejich hodnotami nastavenými na jejich odpovídající typy.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Vrátí záznamy s hodnotami pole nastavenými na název parametrů `type` a jejich hodnotami nastavenými na jejich odpovídající typy.


## Examples

### Example #1
Umožňuje najít typy parametrů pro funkci `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
