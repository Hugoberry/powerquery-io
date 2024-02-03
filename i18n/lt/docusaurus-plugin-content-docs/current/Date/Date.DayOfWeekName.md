---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Pateikiamas savaitės dienos pavadinimas.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Pateikiamas nurodytos <code>date</code> reikšmės savaitės dienos pavadinimas. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


## Examples

### Example #1 
Gaukite savaitės dienos pavadinimą.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
