---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Získá hodinu časového pásma hodnoty.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Vrátí komponentu hodin časového pásma hodnoty `datetimezone`.

-   `dateTimeZone`: Hodnota `datetimezone`, ze které se extrahuje komponenta hodin časového pásma. Pokud je `dateTimeZone` `null`, vrátí funkce hodnotu `null`.


## Examples

### Example #1
Získá komponentu hodin časového pásma zadané hodnoty `datetimezone`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
