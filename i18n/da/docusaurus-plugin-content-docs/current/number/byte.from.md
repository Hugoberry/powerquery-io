---
title: Byte.From
---

# Byte.From


Opretter et 8-bit heltal ud fra den angivne værdi.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerer et 8-bit heltal `number` fra den angivne `value`. Hvis den angivne `value` er `null`, returnerer `Byte.From` `null`. Hvis den angivne `value` er en `number` inden for intervallet af et 8-bit heltal uden en brøkdel, returneres `value`. Hvis det har en brøkdel, afrundes tallet med den angivne afrundingstilstand. Standardafrundingstilstanden er `RoundingMode.ToEven`. Hvis `value` er af en anden type, konverteres den først til en `number` ved hjælp af `Number.FromText`. Se `Number.Round` for de tilgængelige afrundingstilstande. Der kan også angives en valgfri `culture` (f.eks. "en-US").


## Examples

### Example #1
Hent 8-bit heltalsværdien af typen `number` for `"4"`.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hent 8-bit heltalsværdien af typen `number` for `"4.5"` ved hjælp af `RoundingMode.AwayFromZero`.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
