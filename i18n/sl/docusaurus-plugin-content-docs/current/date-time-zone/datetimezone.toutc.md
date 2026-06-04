---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Pretvori komponento"timezone"v časovni pas UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Spremeni podatke o časovnem pasu vrednosti"datetime"`dateTimeZone` na podatke o UTC ali univerzalnem času. Če `dateTimeZone` nima komponente"timezone", se dodajo podatki o časovnem pasu UTC.


## Examples

### Example #1
Spremenite podatke o časovnem pasu za"#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30)"na časovni pas UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
