---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Gets the timezone hour of the value.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Returns the time zone hour component of a `datetimezone` value.

-   `dateTimeZone`: A `datetimezone` value from which the time zone hour component is extracted. If `dateTimeZone` is `null`, the function returns `null`.


## Examples

### Example #1
Get the time zone hours component of the specified `datetimezone` value.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
