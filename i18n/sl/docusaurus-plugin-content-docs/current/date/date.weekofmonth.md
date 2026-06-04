---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Vrne število od 1 do 6, ki kaže, v katerem tednu meseca je datum.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Vrne število od 1 do 6, ki kaže, v katerem tednu meseca je datum `dateTime`.

-   `dateTime`: vrednost `datetime`, za katero se določi teden meseca.


## Examples

### Example #1
Določite, v katerem tednu je 15. marec v letu 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
