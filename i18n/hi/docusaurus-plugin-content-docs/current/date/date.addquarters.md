---
title: Date.AddQuarters
---

# Date.AddQuarters


निर्दिष्ट तिमाहियों को दिनांक में जोड़ता है.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

`datetime` मान `dateTime` में `numberOfQuarters` तिमाहियाँ जोड़ने आने वाला `date`, `datetime` या `datetimezone` परिणाम लौटाता है.

-   `dateTime`: `date`, `datetime` या `datetimezone` वे मान हैं जिनमें तिमाहियों को जोड़ा जा रहा है.
-   `numberOfQuarters`: जोड़ने के लिए तिमाहियों की संख्या.


## Examples

### Example #1
दिनांक 5/14/2011 का प्रतिनिधित्व करने वाले `date`, `datetime` या `datetimezone` मान में 1 तिमाही जोड़ें.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
