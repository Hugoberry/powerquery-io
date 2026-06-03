---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


मान का समय क्षेत्र बदलता है.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

datetimezone मान `dateTimeZone` पर समय क्षेत्र जानकारी को `timezoneHours` द्वारा दी गई नई समय क्षेत्र जानकारी और वैकल्पिक रूप से `timezoneMinutes` में बदलता है. अगर `dateTimeZone` में कोई समय क्षेत्र घटक नहीं है, तो एक त्रुटि होती है.


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
