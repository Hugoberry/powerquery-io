---
title: Date.AddYears
---

# Date.AddYears


निर्दिष्ट वर्षों को दिनांक में जोड़ता है.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

`datetime` मान `dateTime` में `numberOfYears` जोड़ने से `तिथि`, `datetime` या `datetimezone` परिणाम लौटाता है.

-   `dateTime`: `तिथि`, `datetime` या `datetimezone` वे मान हैं, जिनमें वर्षों को जोड़ा जा रहा है.
-   `numberOfYears`: जोड़ने के लिए वर्षों की संख्या.


## Examples

### Example #1
दिनांक 5/14/2011 का प्रतिनिधित्व करने वाले `date`, `datetime` या `datetimezone` मान में 4 वर्ष जोड़ें.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
दिनांक और समय 5/14/2011 08:15:22 पूर्वाह्न का प्रतिनिधित्व करने वाले `date`, `datetime` या `datetimezone` मान में 10 वर्ष जोड़ें.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
