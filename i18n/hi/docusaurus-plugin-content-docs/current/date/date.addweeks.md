---
title: Date.AddWeeks
---

# Date.AddWeeks


निर्दिष्ट सप्ताहों को दिनांक में जोड़ता है.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

`datetime` मान `dateTime` में `numberOfWeeks` सप्ताह जोड़ने से आने वाला `date`, `datetime` या `datetimezone` परिणाम लौटाता है.

-   `dateTime`: `date`, `datetime` या `datetimezone` वे मान हैं जिनमें सप्ताहों को जोड़ा जा रहा है.
-   `numberOfWeeks`: जोड़ने के लिए सप्ताहों की संख्या.


## Examples

### Example #1
दिनांक 5/14/2011 का प्रतिनिधित्व करने वाले `date`, `datetime` या `datetimezone` मान में 2 सप्ताह जोड़ें.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
