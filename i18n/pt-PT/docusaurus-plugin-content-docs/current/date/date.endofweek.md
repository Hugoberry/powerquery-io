---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Devolve o fim da semana.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Devolve o fim da semana que contém `dateTime`. Esta função recebe um `Day` opcional, `firstDayOfWeek`, para definir o primeiro dia da semana neste cálculo relativo. O valor predefinido é `Day.Sunday`.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a partir do qual é calculado o último dia da semana
-   `firstDayOfWeek`: *(opcional)* um valor `Day.Type` que representa o primeiro dia da semana. Os valores possíveis são `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` e `Day.Saturday`. O valor predefinido é `Day.Sunday`.


## Examples

### Example #1
Obter o fim da semana para 14/5/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Obter o fim da semana para 17/5/2011 17:00:00 -7:00, sendo domingo o primeiro dia da semana.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
