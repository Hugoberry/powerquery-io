---
title: Text.At
---

# Text.At


वर्ण को निर्दिष्ट स्थिति पर लौटाता है.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

वर्ण को स्थिति <code>index</code> पर पाठ मान, <code>text</code> में लौटाता है. पाठ में प्रथम वर्ण स्थिति 0 पर है.


## Examples

### Example #1 
स्ट्रिंग &#34;Hello, World&#34; में स्थिति 4 पर वर्ण का पता करें.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
