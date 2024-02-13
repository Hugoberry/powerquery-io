---
title: Number.RoundUp
---

# Number.RoundUp


अगली सबसे बड़ी संख्या लौटाता है. अंकों की संख्या निर्दिष्ट की जा सकती है.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

अगले उच्चतम पूर्णांक तक <code>number</code> पूर्णांक बनाने का परिणाम लौटाता है. यदि <code>number</code> नल है, तो यह फ़ंक्शन नल लौटाता है. यदि <code>digits</code> प्रदान किया जाता है, तो <code>number</code> को दशमलव अंकों की निर्दिष्ट संख्या तक पूर्णांक बना दिया जाता है.


## Examples

### Example #1 
1.234 को बढ़ाकर पूर्णांक बनाएँ.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
1.999 को बढ़ाकर पूर्णांक बनाएँ.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
1.234 को दो दशमलव स्थानों तक पूर्णांक बनाएँ.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
