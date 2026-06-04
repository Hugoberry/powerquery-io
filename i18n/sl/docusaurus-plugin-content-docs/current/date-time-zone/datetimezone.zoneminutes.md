---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Pridobi minuto časovnega pasu vrednosti.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Vrne komponento minut časovnega pasu vrednosti"datetimezone".

-   `dateTimeZone`: Vrednost `datetimezone`, iz katere je izvlečena komponenta minut časovnega pasu. Če je `dateTimeZone` `null`, funkcija vrne `null`.


## Examples

### Example #1
Pridobite komponento minut časovnega pasu navedene vrednosti"datetimezone".
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
