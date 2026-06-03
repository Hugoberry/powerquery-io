---
title: Currency.From
---

# Currency.From


Returnerer en valutaværdi for den angivne værdi.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerer en værdi af typen `currency` fra den angivne `value`. Hvis den angivne `value` er `null`, returnerer `Currency.From` `null`. Hvis den angivne `value` er `number` inden for valutaområdet, afrundes en brøkdel af `value` til 4 decimaler og returneres. Hvis `value` er af en anden type, konverteres den først til en `number` ved hjælp af `Number.FromText`. Det gyldige interval for valuta er `-922.337.203.685.477,5808` til `922.337.203.685.477,5807`. Se `Number.Round` for de tilgængelige afrundingstilstande. Standarden er `RoundingMode.ToEven`. Der kan også angives en valgfri `culture` (f.eks. "en-US").


## Examples

### Example #1
Hent `currency`\-værdien af `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Hent værdien `currency` på `"1.23455"` ved hjælp af `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
