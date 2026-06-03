---
title: Decimal.From
---

# Decimal.From


Opretter en decimal ud fra den angivne værdi.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerer en decimalværdi `nummer` fra den angivne `value`. Hvis den angivne `value` er `null`, returnerer `Decimal.From` `null`. Hvis den angivne `value` er `number` inden for decimalintervallet, returneres `value`, ellers returneres der en fejl. Hvis `value` er af en anden type, konverteres den først til en `number` ved hjælp af `Number.FromText`. Der kan også angives en valgfri `culture` (f.eks. "en-US").


## Examples

### Example #1
Få decimalværdien af typen `number` for `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
