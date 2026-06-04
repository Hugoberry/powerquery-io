---
title: Number.RoundUp
---

# Number.RoundUp


Daje sledeći najveći broj. Može da se navede broj cifara.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Vraća rezultat zaokruživanja `number` na sledeći najveći ceo broj. Ako je `number` null, ova funkcija vraća null. Ako je `digits` dato, `number` zaokružuje se na navedeni broj decimalnih cifara.


## Examples

### Example #1
Zaokruživanje broja 1,234 na veći ceo broj.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2
Zaokruživanje broja 1,999 na veći ceo broj.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3
Zaokružite 1,234 na veći broj sa dva decimalna mesta.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
