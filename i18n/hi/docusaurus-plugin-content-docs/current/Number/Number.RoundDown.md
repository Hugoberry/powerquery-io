---
title: Number.RoundDown
---

# Number.RoundDown


## Description

पिछली सबसे बड़ी संख्या लौटाता है. अंकों की संख्या निर्दिष्ट की जा सकती है.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

<code>number</code> नीचे वाले पिछले उच्चतम पूर्णांक तक पूर्णांक बनाने का परिणाम लौटाता है. यदि <code>number</code> नल है, तो यह फ़ंक्शन नल लौटाता है. यदि <code>digits</code> प्रदान किया जाता है, तो <code>number</code> को निर्दिष्ट दशमलव अंकों तक पूर्णांक बना दिया जाता है. 


## Examples

### Example #1 
1.234 को घटाकर पूर्णांक बनाएँ.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
1.999 को कम करके पूर्णांक बनाएँ.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
1.999 को दो दशमलव स्थानों तक पूर्णांक बनाएँ.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
