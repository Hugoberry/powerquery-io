---
title: Number.Exp
---

# Number.Exp


Umocní číslo e na danú mocninu.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Remarks

Vráti výsledok umocnenia čísla e na mocninu `number` (exponenciálna funkcia).

-   `number`: Hodnota `number`, pre ktorú sa má vypočítať exponenciálna funkcia. Ak hodnota `number` je null, funkcia `Number.Exp` vráti hodnotu null.


## Examples

### Example #1
Umocnite číslo e na 3. mocninu.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
