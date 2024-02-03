---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

समय क्षेत्र घटक को UTC समय क्षेत्र में रूपांतरित करता है.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

datetime मान <code>dateTimeZone</code> की समय क्षेत्र जानकारी को UTC या वैश्विक समय समय क्षेत्र जानकारी में परिवर्तित करता है.    अगर <code>dateTimeZone</code> में कोई समय क्षेत्र घटक नहीं है, तो UTC समय क्षेत्र जानकारी जोड़ी जाती है.


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) के लिए समय क्षेत्र जानकारी को UTC समय क्षेत्र में परिवर्तित करें.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
