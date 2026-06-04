---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Atgriež skaitli no 1 līdz 54, kas norāda, kurā gada nedēļā iekrīt šis datums.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Atgriež skaitli no 1 līdz 54, norādot, kurā gada nedēļā iekrīt datums `dateTime`.

-   `dateTime`: Vērtība `datetime`, kurai ir noteikta gada nedēļa.
-   `firstDayOfWeek`: Neobligāta vērtība `Day.Type`, kas norāda, kura diena tiek uzskatīta par jaunas nedēļas sākumu (piemēram, `Day.Sunday`). Ja šī vērtība nav norādīta, tiek izmantota no kultūras atkarīgā noklusējuma vērtība.


## Examples

### Example #1
Nosakiet, kurā gada nedēļā ir 2011. gada 27. marts.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Nosakiet, kurā gada nedēļā ir 2011. gada 27. marts, kā nedēļas sākumu izmantojot pirmdienu.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
