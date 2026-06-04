---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Мәннің уақыт белдеуінің минуттарын алады.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

"datetimezone" мәнінің уақыт белдеуінің минут құрамдасын қайтарады.

-   `dateTimeZone`: Уақыт белдеуінің минут құрамдасы шығарып алынатын `datetimezone` мәні. `dateTimeZone` мәні `null` болса, функция `null` мәнін қайтарады.


## Examples

### Example #1
Көрсетілген "datetimezone" мәнінің уақыт белдеуінің минуттар құрамдасын алады.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
