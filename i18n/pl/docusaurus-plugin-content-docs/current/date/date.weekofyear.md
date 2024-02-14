---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Zwraca liczbę z zakresu od 1 do 54 wskazującą, w którym tygodniu roku wypada dana data.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Zwraca liczbę z zakresu od 1 do 54 wskazującą, na który tydzień roku przypada data <code>dateTime</code>. <ul>        <li><code>dateTime</code>: wartość <code>datetime</code>, dla której określany jest tydzień roku.</li>        <li><code>firstDayOfWeek</code>: opcjonalna wartość <code>Day.Type</code>, która wskazuje, który dzień jest uznawany za początek tygodnia (na przykład <code>Day.Sunday</code>). Jeśli nie zostanie określona, zostanie użyta wartość domyślna na podstawie kultury.</li>      </ul>


## Examples

### Example #1 
Określ, który tydzień roku zawiera dzień 27 marca 2011 r.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Określ, który tydzień roku zawiera dzień 27 marca 2011 r., używając poniedziałku jako początku tygodnia.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
