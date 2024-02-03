---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Vrátí číslo od 1 do 6 určující, do kterého týdne v měsíci spadá toto datum.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Vrátí číslo od 1 do 6 určující, do kterého týdne v měsíci spadá datum <code>dateTime</code>. <ul>         <li><code>dateTime</code>: Hodnota <code>datetime</code>, pro kterou je určen týden v měsíci.</li>      </ul>


## Examples

### Example #1 
Určete, na který týden připadá v roce 2011 15. března.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
