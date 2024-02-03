---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

समय क्षेत्र घटक को स्थानीय समय क्षेत्र में रूपांतरित करता है.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

datetimezone मान <code>dateTimeZone</code> की समय क्षेत्र जानकारी को स्थानीय समय क्षेत्र जानकारी में परिवर्तित करता है.    अगर <code>dateTimeZone</code> में कोई समय क्षेत्र घटक नहीं है, तो स्थानीय समय क्षेत्र जानकारी जोड़ी जाती है.


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) के लिए समय क्षेत्र जानकारी को स्थानीय समय क्षेत्र (PST मानकर) में परिवर्तित करें.
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
