---
title: Text.ReplaceRange
---

# Text.ReplaceRange


वर्णों की श्रृंखला को निकालता है और निर्दिष्ट की गई स्थिति पर एक नया मान सम्मिलित करता है.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

स्थिति `offset` पर प्रारंभ होने वाले पाठ मान `text` से निकालने वाले वर्णों की संख्या `count` के परिणाम को लौटाता है और फिर `text` में समान स्थिति पर पाठ मान `newText` सम्मिलित करता है.


## Examples

### Example #1
पाठ मान "ABGF" में स्थिति 2 पर एक वर्ण को नए पाठ मान "CDE" के साथ बदलें.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
