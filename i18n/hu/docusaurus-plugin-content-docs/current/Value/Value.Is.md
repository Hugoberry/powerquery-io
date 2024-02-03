---
title: Value.Is
---

# Value.Is


## Description

Meghatározza, hogy egy érték kompatibilis-e a megadott típussal.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Meghatározza, hogy egy érték kompatibilis-e a megadott típussal. Ez egyenértékű az M „is” operátorával, azzal a különbséggel, hogy ez elfogadja az azonosító típusú hivatkozásokat, például a Number.Type-ot.


## Examples

### Example #1 
Két módszer összehasonlítása annak megállapításához, hogy egy szám kompatibilis-e a szám típussal.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
