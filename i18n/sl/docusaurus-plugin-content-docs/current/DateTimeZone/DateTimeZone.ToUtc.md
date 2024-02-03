---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Pretvori komponento &#34;timezone&#34; v časovni pas UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Spremeni podatke o časovnem pasu vrednosti "datetime" <code>dateTimeZone</code> na podatke o UTC ali univerzalnem času.    Če <code>dateTimeZone</code> nima komponente "timezone", se dodajo podatki o časovnem pasu UTC.


## Examples

### Example #1 
Spremenite podatke o časovnem pasu za &#34;#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30)&#34; na časovni pas UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
