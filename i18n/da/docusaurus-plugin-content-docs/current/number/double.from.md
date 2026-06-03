---
title: Double.From
---

# Double.From


Opretter et dobbeltpræcisions flydende tal ud fra den angivne værdi.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerer en værdi af typen Double `number` fra den angivne `value`. Hvis den angivne `value` er `null`, returnerer `Double.From` `null`. Hvis den angivne `value` er `number` inden for området double, returneres `value`, ellers returneres der en fejl. Hvis `value` er af en anden type, konverteres den først til en `number` ved hjælp af `Number.FromText`. Der kan også angives en valgfri `culture` (f.eks. "en-US").


## Examples

### Example #1
Få dobbeltpræcisions flydende tallet af typen `number` for `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
