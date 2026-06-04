---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Pretvori komponento"timezone"v lokalni časovni pas.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Spremeni podatke o časovnem pasu vrednosti"datetimezone"`dateTimeZone` na podatke o lokalnem časovnem pasu. Če `dateTimeZone` nima komponente"timezone", se dodajo podatki o lokalnem časovnem pasu.


## Examples

### Example #1
Spremenite podatke o časovnem pasu za"#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30)"na lokalni časovni pas (predvidevanje PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
