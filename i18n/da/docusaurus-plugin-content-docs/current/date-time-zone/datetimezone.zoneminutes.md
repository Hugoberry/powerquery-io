---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Henter minutter for tidszonen for værdien.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Returns the time zone minutes component of a \`datetimezone\` value.

-   `dateTimeZone`: A `datetimezone` value from which the time zone minutes component is extracted. If `dateTimeZone` is `null`, the function returns `null`.


## Examples

### Example #1
Hent minutkomponenten for tidszonen for den angivne værdi for "datetimezone".
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
