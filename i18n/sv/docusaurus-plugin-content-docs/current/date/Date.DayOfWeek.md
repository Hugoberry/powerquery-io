---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Returnerar ett tal (från 0 till 6) som indikerar det tillhandahållna värdets veckodag.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Returnerar ett tal (från 0 till 6) som anger den veckodag som upptas av den tillhandahållna <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde.</li>        <li><code>firstDayOfWeek</code>: Ett <code>Day</code>-värde som anger vilken dag som ska hanteras som första dag i veckan. Tillåtna värden är Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday eller Day.Saturday. Om inget anges används ett kulturberoende stansdardvärde.</li>      </ul>


## Examples

### Example #1 
Hämta den veckodag som representeras av måndag 21 februari 2011 och hantera söndag som första dag i veckan.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Hämta den veckodag som representeras av måndag 21 februari 2011 och hantera måndag som första dag i veckan.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
