---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


मान का समयक्षेत्र घंटा प्राप्त करता है.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

`datetimezone` मान के समय क्षेत्र घंटे के घटक को लौटाता है.

-   `dateTimeZone`: एक `datetimezone` मान जिससे समय क्षेत्र घंटे के घटक को निकाला गया है. यदि `dateTimeZone` `null` है, तो फ़ंक्शन नल `लौटाता है.`


## Examples

### Example #1
निर्दिष्ट `datetimezone` मान के समय क्षेत्र घंटे के घटक प्राप्त करें.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
