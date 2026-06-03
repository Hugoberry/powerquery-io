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

एक `text` मान लौटाता है जो `text` मान `text` का अंतिम `count` वर्ण है.


## Examples

### Example #1
पाठ "Hello, World" के अंतिम 5 वर्ण प्राप्त करें.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
