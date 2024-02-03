---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Restituisce un numero da 1 a 6 che indica la settimana del mese in cui cade questa data.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Restituisce un numero da 1 a 6 che indica la settimana del mese in cui cade la data <code>dateTime</code>. <ul>        <li><code>dateTime</code>: valore <code>datetime</code> in base al quale viene determinata la settimana del mese.</li>      </ul>


## Examples

### Example #1 
Determinare in quale settimana di marzo cade il giorno 15 nel 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
