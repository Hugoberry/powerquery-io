---
title: Double.From
---

# Double.From


Kreira dupliranu vrednost iz date vrednosti.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vraća dupliranu vrednost `number` od datog `value`. Ako je dati `value` `null`, `Double.From` vraća `null`. Ako je dati `value` `number` u opsegu duplirane vrednosti, vraća se `value`, a u suprotnom se vraća greška. Ako je `value` nekog drugog tipa, prvo će biti konvertovan u `number` koristeći `Number.FromText`. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Dobijte dupliranu vrednost `number` od `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
