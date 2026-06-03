---
title: Single.From
---

# Single.From


Opretter et enkeltpræcisions flydende tal ud fra den angivne værdi.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerer en enkelt `number` værdi fra den angivne `value`. Hvis den angivne `value` er `null`, returnerer `Single.From` `null`. Hvis den angivne `value` er `number` inden for intervallet single, returneres `value`, ellers returneres der en fejl. Hvis `value` er af en anden type, konverteres den først til en `number` ved hjælp af `Number.FromText`. Der kan også angives en valgfri `culture` (f.eks. "en-US").


## Examples

### Example #1
Få et enkeltpræcisions flydende tal af typen `number` for `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
