---
title: Date.StartOfDay
---

# Date.StartOfDay


दिन के शुरू में लौटाता है.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

`dateTime` द्वारा दर्शाए गए दिन की शुरुआत में लौटाता है. `dateTime` का एक `date`, `datetime` या `datetimezone` मान होना अनिवार्य है.


## Examples

### Example #1
10 अक्टूबर, 2011, 8:00 पूर्वाह्न के लिए दिन के शुरू में प्राप्त करें.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
