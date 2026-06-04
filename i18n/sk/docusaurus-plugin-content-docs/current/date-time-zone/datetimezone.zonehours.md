---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Získa hodinu časového pásma hodnoty.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Vráti komponent hodiny časového pásma hodnoty `datetimezone`.

-   `dateTimeZone`: Hodnota `datetimezone`, z ktorej sa extrahuje komponent hodiny časového pásma. Ak je `dateTimeZone` `null`, funkcia vráti kód `null`.


## Examples

### Example #1
Získajte komponent hodín časového pásma zadanej hodnoty `datetimezone`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
