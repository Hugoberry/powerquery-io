---
title: Type.OpenRecord
---

# Type.OpenRecord


Retourneert een geopende versie van het gegeven recordtype (of hetzelfde type indien dit reeds is geopend).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Retourneert een geopende versie van het gegeven `record` `type` (of hetzelfde type indien dit reeds is geopend).


## Examples

### Example #1
Maak een geopende versie van `type [ A = getal]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
