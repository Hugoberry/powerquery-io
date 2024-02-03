---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

स्थिति <code>offset</code> पर प्रारंभ होने वाले पाठ मान <code>text</code> से निकालने वाले वर्णों की संख्या <code>count</code> के परिणाम को लौटाता है और फिर <code>text</code> में समान स्थिति पर पाठ मान <code>newText</code> सम्मिलित करता है.


## Examples

### Example #1 
पाठ मान &#34;ABGF&#34; में स्थिति 2 पर एक वर्ण को नए पाठ मान &#34;CDE&#34; के साथ बदलें.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
