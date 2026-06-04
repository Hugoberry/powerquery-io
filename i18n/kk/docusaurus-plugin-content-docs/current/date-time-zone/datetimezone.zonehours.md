---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Мәннің уақыт белдеуінің сағатын алады.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

`datetimezone` мәнінің уақыт белдеуінің сағат құрамдасын қайтарады.

-   `dateTimeZone`: Уақыт белдеуінің сағат құрамдасы шығарып алынатын `datetimezone` мәні. `dateTimeZone` мәні `null` болса, функция `null` мәнін қайтарады.


## Examples

### Example #1
Көрсетілген `datetimezone` мәнінің уақыт белдеуінің сағаттар құрамдасын алады.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
