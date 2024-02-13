---
title: Text.Start
---

# Text.Start


पाठ का प्रारंभ लौटाता है.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

पाठ मान के रूप में <code>text</code> के प्रथम <code>count</code> वर्ण लौटाता है.


## Examples

### Example #1 
&#34;Hello, World&#34; के प्रथम 5 वर्ण प्राप्त करें.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
