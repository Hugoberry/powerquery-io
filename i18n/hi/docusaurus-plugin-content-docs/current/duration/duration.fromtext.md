---
title: Duration.FromText
---

# Duration.FromText


व्यतीत समय स्वरूप (d.h:m:s) पाठ से अवधि मान लौटाता है.


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

निर्दिष्ट पाठ `text` से एक अवधि मान लौटाता है. इस फ़ंक्शन द्वारा निम्न फ़ॉर्मैट्स को पार्स किया जा सकता है:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(सभी श्रेणियां समावेशी हैं)

-   ddd: दिनों की संख्या.
-   hh: 0 और 23 के बीच, घंटों की संख्या.
-   mm: 0 और 59 के बीच मिनटों की संख्या.
-   ss: सेकंड की संख्या, 0 और 59 के बीच.
-   ff: सेकंड का भिन्न, 0 और 9999999 के बीच.


## Examples

### Example #1
`"2.05:55:20"` को एक `duration` मान में रूपांतरित करें.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
