---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Beolvassa az érték időzóna-óráját.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Egy `datetimezone` érték időzóna-óra összetevőjét adja vissza.

-   `dateTimeZone`: Egy `datetimezone` érték, amelyből a rendszer kinyeri az időzóna óra összetevőjét. Ha a(z) `dateTimeZone` `null`, a függvény `null` értéket ad vissza.


## Examples

### Example #1
A megadott `datetimezone` érték időzóna-óra összetevőjének beolvasása.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
