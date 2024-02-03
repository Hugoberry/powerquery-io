---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Daje prethodni najveći broj. Može da se navede broj cifara.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Vraća rezultat zaokruživanja <code>number</code> na prethodni najveći ceo broj. Ako je <code>number</code> null, ova funkcija vraća null.    Ako je <code>digits</code> dato, <code>number</code> zaokružuje se na navedeni broj decimalnih cifara.  


## Examples

### Example #1 
Zaokruživanje broja 1,234 na manji ceo broj.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Zaokruživanje broja 1,999 na manji ceo broj.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Zaokružite broj 1,999 na manji broj sa dva decimalna mesta.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
