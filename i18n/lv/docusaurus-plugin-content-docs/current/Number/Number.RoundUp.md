---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Tiek atgriezts nākamais lielākais skaitlis. Var norādīt ciparu skaitu.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Tiek atgriezts rezultāts, kas iegūts, noapaļojot vērtību <code>number</code> uz augšu līdz nākamajam lielākajam veselajam skaitlim. Ja vērtība <code>number</code> ir Null, šī funkcija atgriež vērtību Null.    Ja ir norādīts parametrs <code>digits</code>, vērtība <code>number</code> tiek noapaļota līdz skaitlim, kurā ciparu skaits aiz komata atbilst norādītajai vērtībai.  


## Examples

### Example #1 
Noapaļojiet skaitli 1,234 uz augšu līdz veselam skaitlim.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Noapaļojiet skaitli 1,999 uz augšu līdz veselam skaitlim.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Noapaļojiet skaitli 1,234 uz augšu līdz skaitlim, kurā ir divi cipari aiz komata.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
