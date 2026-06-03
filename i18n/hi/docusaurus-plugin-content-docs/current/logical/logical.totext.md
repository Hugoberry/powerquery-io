---
title: Logical.ToText
---

# Logical.ToText


पाठ "true" या "false" लौटाता है जिसमें एक तार्किक मान दिया हुए होता है.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

तार्किक मान `logicalValue` से एक टेक्स्ट मान बनाता है, जो या तो `true` या `false` होता है. अगर `logicalValue` एक तार्किक मान नहीं है, तो एक त्रुटि आएगी.


## Examples

### Example #1
तार्किक `true` से एक पाठ मान बनाएँ.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
