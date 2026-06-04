---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Devolve o final da semana.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Devolve o final da semana que contén `dateTime`. Esta función toma un `Day` opcional, `firstDayOfWeek`, para definilo como o primeiro día da semana para este cálculo relativo. O valor predeterminado é `Day.Sunday`.

-   `dateTime` : Un valor de `date`, `datetime` ou `datetimezone` a partir do cal se calcula o último día da semana
-   `firstDayOfWeek` : *(Opcional)* Un valor de `Day.Type` que representa o primeiro día da semana. Os valores posibles son `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` e `Day.Saturday`. O valor predefinido é `Día.Domingo`.


## Examples

### Example #1
Obter o final da semana para o 14/05/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Obter o final da semana para o 17/05/2011 05:00:00 p.m. - 7:00, onde domingo é o primeiro día da semana.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
