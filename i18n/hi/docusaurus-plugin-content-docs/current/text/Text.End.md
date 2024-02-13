---
title: Text.End
---

# Text.End


पाठ के अंतिम वर्ण लौटाता है.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

एक <code>text</code> मान लौटाता है जो <code>text</code> मान <code>text</code> का अंतिम <code>count</code> वर्ण है.


## Examples

### Example #1 
पाठ &#34;Hello, World&#34; के अंतिम 5 वर्ण प्राप्त करें.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
