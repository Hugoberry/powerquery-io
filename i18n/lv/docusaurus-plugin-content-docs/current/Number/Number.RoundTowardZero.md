---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Tiek atgriezts rezultāts, kas tiek iegūts pozitīvus skaitļus noapaļojot uz leju, bet negatīvus skaitļus noapaļojot uz augšu. Var norādīt ciparu skaitu.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Tiek atgriezts rezultāts, kas tiek iegūts, noapaļojot vērtību <code>number</code> atbilstoši skaitļa zīmei. Izmantojot šo funkciju, pozitīvi skaitļi tiek noapaļoti uz leju, bet negatīvi skaitļi — uz augšu.    Ja ir norādīts parametrs <code>digits</code>, vērtība <code>number</code> tiek noapaļota līdz skaitlim, kurā ciparu skaits aiz komata atbilst parametra <code>digits</code> vērtībai.  


## Examples

### Example #1 
Noapaļojiet skaitli -1,2 Nulles virzienā.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Noapaļojiet skaitli 1,2 Nulles virzienā.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Noapaļojiet skaitli -1,234 nulles virzienā līdz skaitlim, kurā ir divi cipari aiz komata.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
