---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Vrátí číslo (od 0 do 6) označující den v týdnu z poskytnuté hodnoty.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Vrátí číslo (od 0 do 6) označující den v týdnu z poskytnuté <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code>: Hodnota <code>Day</code> určující den, který má být považován za první den v týdnu. Povolené hodnoty jsou Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday a Day.Saturday. Pokud tento parametr není zadán, použije se výchozí hodnota jazykové verze.</li>      </ul>


## Examples

### Example #1 
Získat den v týdnu představovaný pondělím 21. února 2011, přičemž první den v týdnu je Sunday (neděle).
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Získat den v týdnu představovaný pondělím 21. února 2011, přičemž první den v týdnu je Monday (pondělí).
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
