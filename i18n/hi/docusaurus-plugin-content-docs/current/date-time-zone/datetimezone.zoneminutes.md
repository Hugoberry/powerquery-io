---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


मान का समय क्षेत्र मिनट प्राप्त करता है.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

एक \`datetimezone\` मान के समय क्षेत्र मिनट घटक को लौटाता है.

-   `dateTimeZone`: एक `datetimezone` मान, जिससे समय क्षेत्र के मिनटों वाला घटक निकाला जाता है. अगर `dateTimeZone` `null` है, तो फ़ंक्शन `null` लौटाता है.


## Examples

### Example #1
निर्दिष्ट 'datetimezone' मान का समय क्षेत्र मिनट का घटक प्राप्त करें.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
