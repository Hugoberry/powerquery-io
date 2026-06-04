---
title: Percentage.From
---

# Percentage.From


Vraća vrednost procenta iz date vrednosti.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vraća vrednost `percentage` od datog `value`. Ako je data vrednost `value` `null`, `Percentage.From` vraća `null`. Ako je data vrednost `value` `text` sa simbolom procenta na kraju, biće vraćen konvertovani decimalni broj. U suprotnom, vrednost će biti konvertovana u `number` koristeći `Number.From`. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Preuzmite vrednost `procenat` od `„12,3%“`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
