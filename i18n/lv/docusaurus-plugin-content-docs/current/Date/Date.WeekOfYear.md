---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Atgriež skaitli no 1 līdz 54, kas norāda, kurā gada nedēļā iekrīt šis datums.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Atgriež skaitli no 1 līdz 54, norādot, kurā gada nedēļā iekrīt datums <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Vērtība <code>datetime</code>, kurai ir noteikta gada nedēļa.</li>        <li><code>firstDayOfWeek</code>: Neobligāta vērtība <code>Day.Type</code>, kas norāda, kura diena tiek uzskatīta par jaunas nedēļas sākumu (piemēram, <code>Day.Sunday</code>). Ja šī vērtība nav norādīta, tiek izmantota no kultūras atkarīgā noklusējuma vērtība.</li>      </ul>


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
