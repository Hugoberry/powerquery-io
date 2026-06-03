---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Retorna o final da semana.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Retorna o final da semana que contém `dateTime`. Esta função recebe um opcional `Day`, `firstDayOfWeek`, para definir como o primeiro dia da semana para este cálculo relativo. O valor padrão é `Day.Sunday`.

-   `dateTime`: um valor de `date`, `datetime` ou `datetimezone` a partir do qual o último dia da semana é calculado
-   `firstDayOfWeek`: *(Opcional)* Um `Day.Type` que representa o primeiro dia da semana. Os valores possíveis são `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` e `Day.Saturday`. O valor padrão é `Day.Sunday`.


## Examples

### Example #1
Obtenha o fim da semana de 14/5/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Obtenha o fim da semana de 17/5/2011 05:00: 00 PM. -7:00, considerando o domingo como primeiro dia da semana.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
