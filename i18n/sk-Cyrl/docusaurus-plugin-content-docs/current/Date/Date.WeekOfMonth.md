---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Vráti číslo od 1 do 6 udávajúce týždeň v mesiaci, do ktorého spadá tento dátum.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Vráti číslo od 1 do 6 udávajúce týždeň v mesiaci, do ktorého spadá dátum <code>dateTime</code>. <ul>         <li><code>dateTime</code>: Hodnota <code>datetime</code>, pre ktorú sa určuje týždeň v mesiaci.</li>      </ul>


## Examples

### Example #1 
Určte, do ktorého týždňa v roku 2011 spadá dátum 15. marec.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
