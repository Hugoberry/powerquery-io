---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Obté els minuts de fus horari del valor.


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
Obtín el component de minuts del fus horari del valor "datetimezone" especificat.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
