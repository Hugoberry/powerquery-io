---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


वह रिकॉर्ड लौटाता है, जिसमें datetimezone मान के भाग शामिल हैं.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

वह रिकॉर्ड लौटाता है, जिसमें दिए गए datetimezone मान `dateTimeZone` के भाग शामिल होते हैं.

-   `dateTimeZone`: एक ऐसा `datetimezone` मान, जिससे उसके भागों के रिकॉर्ड को परिकलित किया जाना है.


## Examples

### Example #1
`#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` मान को उस रिकॉर्ड में रूपांतरित करें जिसमें दिनांक, समय और क्षेत्र मान शामिल हैं.
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
