---
title: Text.RemoveRange
---

# Text.RemoveRange


किसी दिए गए ऑफ़सेट से वर्णों की गिनती को निकालता है


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

स्थिति `offset` से निकाले गए सभी वर्णों के साथ पाठ मान `text` की प्रतिलिपि लौटाता है. निकाले जाने वाले वर्णों की संख्या को निर्दिष्ट करने के लिए एक वैकल्पिक पैरामीटर `count` का उपयोग किया जा सकता है. `count` का डिफ़ॉल्ट मान 1 है. स्थिति मान 0 से प्रारंभ होते हैं.


## Examples

### Example #1
स्थिति 2 पर पाठ मान "ABEFC"से 1 वर्ण निकालें.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
स्थिति 2 पर प्रारंभ होने वाले पाठ मान "ABEFC"से दो वर्ण निकालें.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
