---
title: Text.PositionOfAny
---

# Text.PositionOfAny


किसी भी सूचीबद्ध वर्ण के पाठ मान की प्रथम स्थिति को लौटाता है (यदि -1 नहीं मिला होता है).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

`text` में पाई जाने वाली सूची `characters` के किसी भी वर्ण की पहली स्थिति लौटाता है. एक वैकल्पिक पैरामीटर `occurrence` का उपयोग यह निर्दिष्ट करने के लिए किया जा सकता है कि किस आवृति स्थिति को लौटाना है.


## Examples

### Example #1
पाठ "Hello, World!" में "W" या "H" की पहली स्थिति पता करें.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
टेक्स्ट "Hello, World!" में "W" या "H" की सभी स्थितियाँ ढूँढें.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
