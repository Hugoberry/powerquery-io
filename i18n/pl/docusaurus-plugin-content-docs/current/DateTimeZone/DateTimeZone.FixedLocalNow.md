---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Zwraca bieżącą datę i godzinę w lokalnej strefie czasowej. Ta wartość jest stała i nie zmienia się w kolejnych wywołaniach.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Zwraca wartość typu <code>datetime</code> reprezentującą aktualną datę i godzinę ustawioną w systemie. Zwrócona wartość zawiera informacje o strefie czasowej reprezentujące lokalną strefę czasową. Ta wartość jest stała i nie zmienia się w kolejnych wywołaniach, w przeciwieństwie do wartości zwracanej przez funkcję DateTimeZone.LocalNow, która może zwracać różne wartości w trakcie wykonywania wyrażenia.



## Category
DateTimeZone
