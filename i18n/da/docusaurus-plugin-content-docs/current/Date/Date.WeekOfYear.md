---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Returnerer et tal fra 1-54, der angiver, hvilken uge i året denne dato ligger i.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Returnerer et tal fra 1-54, der angiver den uge i året, som datoen, <code>dateTime</code>, falder i. <ul> <li><code>dateTime</code>: En <code>datetime</code>-værdi som bestemmer ugen i året. </li> <li><code>firstDayOfWeek</code>: En valgfri <code>Day.Type</code>-værdi, der angiver, hvilken dag der betragtes som startpunkt for en ny uge (f.eks <code>Day.Sunday</code>). Hvis dette ikke angives, bruges en kulturafhængig standard.                </li>      </ul>


## Examples

### Example #1 
Afgør, hvilken uge den 27. marts falder i i 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Afgør, hvilken uge 27. marts falder i i 2011, ved hjælp af mandag som starten på ugen.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
