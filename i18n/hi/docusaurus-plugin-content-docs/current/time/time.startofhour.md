---
title: Time.StartOfHour
---

# Time.StartOfHour


घंटे के प्रारंभ में लौटाता है.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

`dateTime` द्वारा दर्शाए गए दिन की शुरुआत में लौटाता है. `dateTime` का एक `time`, `datetime` or `datetimezone` मान होना अनिवार्य है.


## Examples

### Example #1
10 अक्टूबर, 2011, 8:10:32 पूर्वाह्न के लिए घंटे के प्रारंभ में प्राप्त करें.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
