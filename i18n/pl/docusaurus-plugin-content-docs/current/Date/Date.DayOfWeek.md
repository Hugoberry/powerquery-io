---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Zwraca liczbę (od 0 do 6) wskazującą dzień tygodnia dla podanej wartości.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Zwraca liczbę (od 0 do 6) wskazującą dzień tygodnia dla podanej wartości <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: Wartość <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code>: Wartość <code>Day</code> wskazująca dzień uznawany za pierwszy dzień tygodnia. Dozwolona wartość to Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday lub Day.Saturday. Jeśli nie zostanie określona, zostanie użyta wartość domyślna zależna od kultury.</li>      </ul>


## Examples

### Example #1 
Ustal, jaki dzień tygodnia był w poniedziałek 21 lutego 2011 r., używając niedzieli jako pierwszego dnia tygodnia.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Ustal, jaki dzień tygodnia był w poniedziałek 21 lutego 2011 r., używając poniedziałku jako pierwszego dnia tygodnia.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
