---
title: Number.RoundDown
---

# Number.RoundDown


Returnerer det forrige højeste tal. Antallet af cifre kan angives.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Returnerer resultatet af at runde `number` ned til det forrige højeste heltal. Hvis `number` er null, returnerer denne funktion null. Hvis der angives `digits`, afrundes `number` til det angivne antal decimaltal.


## Examples

### Example #1
Rund 1,234 ned til et heltal.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Rund 1,999 ned til et heltal.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
Rund 1,999 ned til to decimaler.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
