---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

मान का समय क्षेत्र बदलता है.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

<code>timezoneHours</code> और वैकल्पिक रूप से <code>timezoneMinutes</code> द्वारा प्रदान की गई नई समय क्षेत्र जानकारी के लिए समय क्षेत्र जानकारी को datetimezone मान <code>dateTimeZone</code> में बदलता है.    अगर <code>dateTimeZone</code> में कोई समय क्षेत्र घटक नहीं है, तो एक अपवाद प्रस्तुत किया जाता है.


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) के लिए समय क्षेत्र जानकारी को 8 घंटे में परिवर्तित करें.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) के लिए समय क्षेत्र जानकारी को -30 मिनट बदलें.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
