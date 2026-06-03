---
title: Text.PadStart
---

# Text.PadStart


दिए गए पाठ के प्रारंभ को पैड करके निर्दिष्ट लंबाई वाले पाठ को लौटाता है.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

पाठ मान `text` के प्रारंभ में स्थान सम्मिलित करके `count` लंबाई पर पैड किए गए एक `पाठ` मान को लौटाता है. पैडिंग के लिए उपयोग किए गए वर्ण को निर्दिष्ट करने हेतु एक वैकल्पिक वर्ण `character` का उपयोग किया जा सकता है. डिफ़ॉल्ट पैड वर्ण एक स्थान है.


## Examples

### Example #1
पाठ मान के प्रारंभ को पैड करें ताकि वह 10 वर्ण लंबा हो.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
पाठ मान के प्रारंभ को "|" द्वारा पैड करें ताकि वह 10 वर्ण लंबा हो.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
