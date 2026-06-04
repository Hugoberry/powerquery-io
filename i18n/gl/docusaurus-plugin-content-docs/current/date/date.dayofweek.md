---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Devolve un número (do 0 ao 6) que indica o día da semana do valor fornecido.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Devolve un número (do 0 ao 6) que indica o día da semana do valor `dateTime` fornecido.

-   `dateTime`: un valor de `date`, `datetime` ou `datetimezone`.
-   `firstDayOfWeek`: un valor `Day` indica que día se debería considerar o primeiro día da semana. Os valores permitidos son Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday ou Day.Saturday. Se non se especifica, usarase un valor predefinido dependente da referencia cultural.


## Examples

### Example #1
Obtén o día da semana que representado como luns, 21 de febreiro de 2011, tendo en conta que o domingo se considera o primeiro día da semana.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
Obtén o día da semana que representado como luns, 21 de febreiro de 2011, tendo en conta que o luns se considera o primeiro día da semana.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
