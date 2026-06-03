---
title: Percentage.From
---

# Percentage.From


Returnerer en procentværdi af den givne værdi.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerer en værdi af typen `procent` fra den angivne `value`. Hvis den angivne `value` er `null`, returnerer `Percentage.From` `null`. Hvis den angivne `value` er `text` med et efterstillet procentsymbol, returneres det konverterede decimaltal. Ellers konverteres værdien til en `number` ved hjælp af `Number.From`. Der kan også angives en valgfri `culture` (f.eks. "en-US").


## Examples

### Example #1
Få `percentage`\-værdien af `"12.3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
