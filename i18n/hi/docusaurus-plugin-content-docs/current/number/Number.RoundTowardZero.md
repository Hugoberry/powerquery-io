---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


धनात्मक संख्याओं को कम करके और ऋणात्मक संख्याओं को बढ़ाकर पूर्णांक बनाने का परिणाम लौटाता है. अंकों की संख्या निर्दिष्ट की जा सकती है.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

संख्याओं के चिह्न के आधार पर <code>number</code> को पूर्णांक बनाने का परिणाम लौटाता है. यह फ़ंक्शन, धनात्मक संख्याओं को कम करके और ऋणात्मक संख्याओं को बढ़ाकर पूर्णांक बना देगा.    यदि <code>digits</code> निर्दिष्ट हो, तो <code>number</code> को <code>digits</code> दशमलव अंकों तक पूर्णांक बनाया जाता है.  


## Examples

### Example #1 
-1.2 को शून्य की ओर पूर्णांक बनाएँ.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
1.2 को शून्य की ओर पूर्णांक बनाएँ.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
संख्या -1.234 को शून्य से दो दशमलव स्थानों तक पूर्णांक बनाएँ.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
