---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


Zwraca bieżącą datę i godzinę w lokalnej strefie czasowej. Ta wartość jest stała i nie zmienia się w kolejnych wywołaniach.


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Remarks

Zwraca wartość typu <code>datetime</code> reprezentującą aktualną datę i godzinę ustawioną w systemie. Ta wartość jest stała i nie zmienia się w kolejnych wywołaniach, w przeciwieństwie do wartości zwracanej przez funkcję DateTime.LocalNow, która może zwracać różne wartości w trakcie wykonywania wyrażenia.



## Category
DateTime
