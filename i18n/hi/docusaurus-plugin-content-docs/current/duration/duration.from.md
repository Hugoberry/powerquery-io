---
title: Duration.From
---

# Duration.From


दिए गए मान से एक अवधि बनाता है.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

दिए गए मान के हिसाब से अवधि का मान लौटाता है.

-   `value`: वह मान जिससे अवधि का मान प्राप्त होता है. अगर दिया गया `value`, `null` है, तो यह फ़ंक्शन `null` लौटाता है. अगर दिया गया `value` एक `duration` है, तो `value` लौटाया जाता है. निम्न प्रकार के मानों को `duration` मान में बदला जा सकता है:
    -   `text`: बीती हुई समयावधि के टेक्स्ट-आधारित फ़ॉर्म (d.h:m:s) से प्राप्त एक `duration` मान. विवरण के लिए `Duration.FromText` देखें.
    -   `number`: एक `duration` जो `value` द्वारा व्यक्त किए गए पूर्ण और भिन्नात्मक दिनों की संख्या के समतुल्य है.

यदि `value` किसी भी अन्य प्रकार का है, तो एक त्रुटि लौटाई जाती है.


## Examples

### Example #1
`2.525` को एक `duration` मान में रूपांतरित करें.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
टेक्स्ट मान `"2.05:55:20.34567"` को `duration` मान में बदलें.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
