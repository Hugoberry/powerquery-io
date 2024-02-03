---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Zwraca liczbę z zakresu od 1 do 6 wskazującą, w którym tygodniu miesiąca przypada ta data.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Zwraca liczbę z zakresu od 1 do 6 wskazującą, w którym tygodniu miesiąca wypada data <code>dateTime</code>. <ul> <li><code>dateTime</code>: wartość <code>data/godzina</code>, dla której jest określany tydzień miesiąca.</li></ul>


## Examples

### Example #1 
Określ, w którym tygodniu marca w 2011 r. przypada 15. dzień.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
