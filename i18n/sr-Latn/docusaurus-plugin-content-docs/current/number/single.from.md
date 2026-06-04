---
title: Single.From
---

# Single.From


Kreira jedinstvenu vrednost iz date vrednosti.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vraća pojedinačnu vrednost `number` od datog `value`. Ako je dati `value` `null`, `Single.From` vraća `null`. Ako je dati `value` `number` u opsegu pojedinačne vrednosti, vraća se `value`, a u suprotnom se vraća greška. Ako je `value` nekog drugog tipa, prvo će biti konvertovan u `number` koristeći `Number.FromText`. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Dobijte jedinstvenu `number` vrednost od `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
