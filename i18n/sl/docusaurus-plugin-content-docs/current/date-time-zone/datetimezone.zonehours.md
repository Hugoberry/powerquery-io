---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Pridobi uro časovnega pasu vrednosti.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Vrne komponento ure časovnega pasu za vrednost `datetimezone`.

-   `dateTimeZone`: Vrednost `datetimezone`, iz katere je izvlečena komponenta ure časovnega pasu. Če je `dateTimeZone` `null`, funkcija vrne `null`.


## Examples

### Example #1
Pridobite komponento ur časovnega pasu navedene vrednosti `datetimezone`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
