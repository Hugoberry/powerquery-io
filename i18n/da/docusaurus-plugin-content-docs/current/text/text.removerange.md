---
title: Text.RemoveRange
---

# Text.RemoveRange


Fjerner et antal tegn med start ved den angivne forskydning.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Returnerer en kopi af tekstværdien `text`, hvor alle tegn fra position `offset` er fjernet. Der kan bruges en valgfri parameter, `count`, til at angive antallet af tegn, der skal fjernes. Standardværdien for `count` er 1. Positionsværdier starter ved 0.


## Examples

### Example #1
Fjern 1 tegn fra tekstværdien "ABEFC" ved position 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Fjern 2 tegn fra tekstværdien "ABEFC" med start ved position 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
