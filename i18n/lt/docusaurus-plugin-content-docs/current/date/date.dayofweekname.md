---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Pateikiamas savaitės dienos pavadinimas.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Pateikiamas nurodytos `date` reikšmės savaitės dienos pavadinimas. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“).


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
