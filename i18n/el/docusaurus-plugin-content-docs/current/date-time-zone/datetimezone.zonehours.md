---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Λαμβάνει την ώρα ζώνης ώρας της τιμής.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Επιστρέφει το στοιχείο ώρας ζώνης ώρας μιας τιμής `datetimezone`.

-   `dateTimeZone`: Μια τιμή `datetimezone` από την οποία εξάγεται το στοιχείο ώρας ζώνης ώρας. Αν `dateTimeZone` είναι `null`, η συνάρτηση επιστρέφει `null`.


## Examples

### Example #1
Λάβετε το στοιχείο ώρες ζώνης ώρας της καθορισμένης τιμής `datetimezone`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
