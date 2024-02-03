---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Tiek atgriezts iepriekšējais lielākais skaitlis. Var norādīt ciparu skaitu.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Tiek atgriezts rezultāts, kas iegūts, noapaļojot vērtību <code>number</code> uz leju līdz iepriekšējam lielākajam veselajam skaitlim. Ja vērtība <code>number</code> ir Null, šī funkcija atgriež vērtību Null.    Ja ir norādīts parametrs <code>digits</code>, vērtība <code>number</code> tiek noapaļota līdz skaitlim, kurā ciparu skaits aiz komata atbilst norādītajai vērtībai.  


## Examples

### Example #1 
Noapaļojiet skaitli 1,234 uz leju līdz veselam skaitlim.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Noapaļojiet skaitli 1,999 uz leju līdz veselam skaitlim.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Noapaļojiet skaitli 1,999 to uz leju līdz skaitlim, kurā ir divi cipari aiz komata.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
