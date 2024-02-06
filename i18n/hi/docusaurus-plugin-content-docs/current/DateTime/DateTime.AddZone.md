---
title: DateTime.AddZone
---

# DateTime.AddZone


datetime मान में समय क्षेत्र की जानकारी जोड़ता है.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

<code>dateTime</code> मान में समय क्षेत्र की जानकारी जोड़ता है. समय क्षेत्र की जानकारी में <code>timezoneHours</code> और वैकल्पिक रूप से <code>timezoneMinutes</code> शामिल है, जो UTC समय से इच्छित ऑफ़सेट निर्दिष्ट करता है.


## Examples

### Example #1 
समय क्षेत्र को UTC+7:30 (UTC के 7 घंटे और 30 मिनट बाद) पर सेट करें.
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
