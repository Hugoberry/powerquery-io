---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Atgriež skaitli (no 0 līdz 6), kas apzīmē norādītās vērtības nedēļas dienu.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Atgriež skaitli (no 0 līdz 6), kas apzīmē norādītās <code>dateTime</code> vērtības nedēļas dienu.  <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība.</li>        <li><code>firstDayOfWeek</code>: <code>Day</code> vērtība, kas norāda, kura diena jāuzskata par pirmo nedēļas dienu. Atļautās vērtības ir Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday un Day.Saturday. Ja vērtība nav norādīta, tiek izmantots no kultūras atkarīgs noklusējums.</li>      </ul>


## Examples

### Example #1 
Noskaidrojiet, kurā nedēļas dienā iekrīt pirmdiena, 2011. gada 21. februāris, ja par pirmo nedēļas dienu tiek uzskatīta svētdiena.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Noskaidrojiet, kurā nedēļas dienā iekrīt pirmdiena, 2011. gada 21. februāris, ja par pirmo nedēļas dienu tiek uzskatīta pirmdiena.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
