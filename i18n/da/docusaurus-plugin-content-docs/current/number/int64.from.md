---
title: Int64.From
---

# Int64.From


Opretter et 64-bit heltal ud fra den angivne værdi.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerer et 64-bit heltalværdi `number` fra den angivne `value`. Hvis den angivne `value` er `null`, returnerer `Int64.From` `null`. Hvis den angivne `value` er `number` inden for intervallet 64-bit heltal med fortegn uden en brøkdel, returneres `value`. Hvis det har en brøkdel, afrundes tallet med den angivne afrundingstilstand. Standardafrundingstilstanden er `RoundingMode.ToEven`. Hvis `value` er af en anden type, konverteres den først til en `number` ved hjælp af `Number.FromText`. Se `Number.Round` for de tilgængelige afrundingstilstande. Der kan også angives en valgfri `culture` (f.eks. "en-US").


## Examples

### Example #1
Hent 64-bit `number`\-heltalsværdien `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hent heltalsværdien `number` på 64-bit på `"4.5"` ved hjælp af `RoundingMode.AwayFromZero`.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
