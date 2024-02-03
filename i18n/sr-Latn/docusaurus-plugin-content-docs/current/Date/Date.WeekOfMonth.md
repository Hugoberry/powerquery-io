---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Vraća broj od 1 do 6 koji pokazuje u kojoj se sedmici u mesecu ovaj datum nalazi.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Vraća broj od 1 do 6 koji pokazuje u kojoj se sedmici u mesecu datum <code>dateTime</code> nalazi. <ul>        <li><code>dateTime</code>: Vrednost <code>datetime</code> za koju se određuje sedmica u mesecu.</li>      </ul>


## Examples

### Example #1 
Odredite koja je sedmica 15. marta 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
