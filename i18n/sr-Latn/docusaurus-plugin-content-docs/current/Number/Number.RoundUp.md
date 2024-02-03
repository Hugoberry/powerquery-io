---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Daje sledeći najveći broj. Može da se navede broj cifara.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Vraća rezultat zaokruživanja <code>number</code> na sledeći najveći ceo broj. Ako je <code>number</code> null, ova funkcija vraća null.    Ako je <code>digits</code> dato, <code>number</code> zaokružuje se na navedeni broj decimalnih cifara.  


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
