---
title: Number.RoundDown
---

# Number.RoundDown


Vrne največje prejšnje število. Določite lahko število števk.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Vrne rezultat zaokroževanja `number` navzdol na prejšnje največje celo število. Če ima `number` ničelno vrednost, funkcija vrne ničelno vrednost. Če navedete `digits`, se `number` zaokroži na določeno število decimalnih števk.


## Examples

### Example #1
Zaokrožite 1,234 navzdol na celo število.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Zaokrožite 1,999 navzdol na celo število.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
Zaokrožite 1,999 navzdol na dve decimalni mesti.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
