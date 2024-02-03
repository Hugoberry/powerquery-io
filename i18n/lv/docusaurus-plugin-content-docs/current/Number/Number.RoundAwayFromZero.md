---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Tiek atgriezts rezultāts, kas tiek iegūts, pozitīvus skaitļus noapaļojot uz augšu, bet negatīvus skaitļus noapaļojot uz leju. Var norādīt ciparu skaitu.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Tiek atgriezts rezultāts, kas tiek iegūts, noapaļojot vērtību <code>number</code> atbilstoši skaitļa zīmei. Izmantojot šo funkciju, pozitīvi skaitļi tiek noapaļoti uz augšu, bet negatīvi skaitļi — uz leju.    Ja ir norādīts parametrs <code>digits</code>, vērtība <code>number</code> tiek noapaļota līdz skaitlim, kurā ciparu skaits aiz komata atbilst parametra <code>digits</code> vērtībai.  


## Examples

### Example #1 
Noapaļojiet skaitli -1,2 virzienā prom no Nulles.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Noapaļojiet skaitli 1,2 virzienā prom no Nulles.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Noapaļojiet skaitli -1,234 virzienā prom no nulles līdz skaitlim, kurā ir divi cipari aiz komata.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
