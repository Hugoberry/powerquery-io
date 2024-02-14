---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


धनात्मक संख्याओं को बढ़ाकर और ऋणात्मक संख्याओं को कम करके पूर्णांक बनाने का परिणाम लौटाता है. अंकों की संख्या निर्दिष्ट की जा सकती है.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

संख्या के चिह्न के आधार पर <code>number</code> को पूर्णांक का परिणाम लौटाता है. यह फ़ंक्शन, धनात्मक संख्याओं को बढ़ाकर और ऋणात्मक संख्याओं को कम करके पूर्णांक बना देगा.    यदि <code>digits</code> निर्दिष्ट हो, तो <code>number</code> को <code>digits</code> दशमलव अंकों तक पूर्णांक बनाया जाता है.  


## Examples

### Example #1 
संख्या -1.2 को शून्य से अधिक का पूर्णांक बनाता है.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
संख्या 1.2 को शून्य से अधिक का पूर्णांक बनाता है.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
संख्या -1.234 को शून्य से दूर दो दशमलव स्थानों तक पूर्णांक बनाएँ.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
