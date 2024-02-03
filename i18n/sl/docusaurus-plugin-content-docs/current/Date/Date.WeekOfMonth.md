---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Vrne število od 1 do 6, ki kaže, v katerem tednu meseca je datum.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Vrne število od 1 do 6, ki kaže, v katerem tednu meseca je datum <code>dateTime</code>. <ul>        <li><code>dateTime</code>: vrednost <code>datetime</code>, za katero se določi teden meseca.</li>      </ul>


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
