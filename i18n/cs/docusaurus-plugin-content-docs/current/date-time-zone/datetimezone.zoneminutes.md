---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Získá minuty časového pásma hodnoty.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Vrátí komponentu minut časového pásma hodnoty datetimezone.

-   `dateTimeZone`: Hodnota `datetimezone`, ze které se extrahuje komponenta minut časového pásma. Pokud je `dateTimeZone` `null`, vrátí funkce hodnotu `null`.


## Examples

### Example #1
Získá komponentu minut časového pásma zadané hodnoty datetimezone.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
