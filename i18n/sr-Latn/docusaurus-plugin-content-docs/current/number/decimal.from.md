---
title: Decimal.From
---

# Decimal.From


Kreira decimalu iz date vrednosti.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vraća decimalnu vrednost `number` od datog `value`. Ako je dati `value` `null`, `Decimal.From` vraća `null`. Ako je dati `value` `number` u opsegu decimale, vraća se `value`, a u suprotnom se vraća greška. Ako je `value` nekog drugog tipa, prvo će biti konvertovan u `number` koristeći `Number.FromText`. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Dobijte decimalnu `number` vrednost od `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
