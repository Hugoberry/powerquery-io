---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Zwraca koniec tygodnia.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Zwraca koniec tygodnia, który zawiera `dateTime`. Ta funkcja przyjmuje opcjonalną wartość `Day`, `firstDayOfWeek`, aby ustawić pierwszy dzień tygodnia dla swoich względnych obliczeń. Wartość domyślna to `Day.Sunday`.

-   `dateTime`: Wartość typu `date`, `datetime` lub `datetimezone`, na podstawie której jest obliczany ostatni dzień tygodnia.
-   `firstDayOfWeek`: *(Opcjonalnie)* Wartość `Day.Type` reprezentująca pierwszy dzień tygodnia. Możliwe wartości to `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` i `Day.Saturday.`. Wartość domyślna to `Day.Sunday`.


## Examples

### Example #1
Określ koniec tygodnia dla daty 2011-05-14.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Ustal koniec tygodnia dla daty 2011-05-17 17:00:00 -7:00, używając jako pierwszego dnia tygodnia niedzieli (ustawienie domyślne).
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
