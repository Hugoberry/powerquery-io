---
title: Logical.FromText
---

# Logical.FromText


पाठ मानों "true" और "false" से एक तार्किक मान बनाता है.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

टेक्स्ट मान `text`, से एक तार्किक मान बनाता है जो या तो "true" या "false" होती है. यदि `text` में कोई भिन्न स्ट्रिंग है, तो एक त्रुटि आएगी. टेक्स्ट मान `text` केस सेंसिटिव नहीं है.


## Examples

### Example #1
पाठ स्ट्रिंग "true" से एक तार्किक मान बनाएँ.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
पाठ स्ट्रिंग "a" से एक तार्किक मान बनाएँ.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
