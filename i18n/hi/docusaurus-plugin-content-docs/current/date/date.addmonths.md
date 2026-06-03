---
title: Date.AddMonths
---

# Date.AddMonths


निर्दिष्ट महीनों को दिनांक में जोड़ता है.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

`datetime` मान `dateTime` में `numberOfMonths` महीना जोड़ने से `तिथि`, `datetime` या `datetimezone` परिणाम लौटाता है.

-   `dateTime`: `तिथि`, `datetime` या `datetimezone` वे मान हैं, जिनमें महीनों को जोड़ा जा रहा है.
-   `numberOfMonths`: जोड़ने के लिए महीनों की संख्या.


## Examples

### Example #1
दिनांक 5/14/2011 का प्रतिनिधित्व करने वाले `date`, `datetime` या `datetimezone` मान में 5 महीने जोड़ें.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
दिनांक और समय 5/14/2011 08:15:22 पूर्वाह्न का प्रतिनिधित्व करने वाले `date`, `datetime` या `datetimezone` मान में 18 महीने जोड़ें.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
