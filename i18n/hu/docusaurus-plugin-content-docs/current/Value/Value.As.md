---
title: Value.As
---

# Value.As


## Description

Visszaadja az értéket, ha az kompatibilis a megadott típussal.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Visszaadja az értéket, ha az kompatibilis a megadott típussal. Ez egyenértékű az M „as” operátorával, azzal a különbséggel, hogy ez elfogadja az azonosító típusú hivatkozásokat, például a Number.Type-ot.


## Examples

### Example #1 
Típuskonverziót használ egy szám számmá konvertáláshoz.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Megkísérel szöveges értéket típuskonverzióval számmá alakítani.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
