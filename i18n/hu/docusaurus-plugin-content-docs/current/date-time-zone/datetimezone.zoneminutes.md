---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Beolvassa az érték időzóna-percét.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Egy datetimezone érték időzóna-perc összetevőjét adja vissza.

-   `dateTimeZone`: Egy `datetimezone` érték, amelyből a rendszer kinyeri az időzóna perc összetevőjét. Ha a(z) `dateTimeZone` `null`, a függvény `null` értéket ad vissza.


## Examples

### Example #1
A megadott datetimezone érték időzóna-perc összetevőjének beolvasása.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
