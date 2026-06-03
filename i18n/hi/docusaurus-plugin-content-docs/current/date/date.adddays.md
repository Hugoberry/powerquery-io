---
title: Date.AddDays
---

# Date.AddDays


निर्दिष्ट दिनों को दिनांक में जोड़ता है.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

`datetime` मान `dateTime` में `numberOfDays` दिन जोड़ने से आने वाला `date`, `datetime` या `datetimezone` परिणाम लौटाता है.

-   `dateTime`: `date`, `datetime` या `datetimezone` वे मान हैं जिनमें दिनों को जोड़ा जा रहा है.
-   `numberOfDays`: जोड़ने के लिए दिनों की संख्या.


## Examples

### Example #1
दिनांक 5/14/2011 का प्रतिनिधित्व करने वाले `date`, `datetime` या `datetimezone` मान में 5 दिन जोड़ें.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
