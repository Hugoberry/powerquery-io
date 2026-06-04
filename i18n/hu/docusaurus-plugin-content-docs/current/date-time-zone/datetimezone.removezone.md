---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Eltávolítja az időzónára vonatkozó adatokat a megadott datetimezone értékből.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Egy #datetime értéket ad vissza a következőből az időzónára vonatkozó adatok eltávolításával: `dateTimeZone`.


## Examples

### Example #1
Az időzónára vonatkozó adatok eltávolítása a #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0) értékből
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
