---
title: Text.Clean
---

# Text.Clean


निकाले गए सभी नियंत्रण वर्णों के साथ पाठ मान लौटाता है.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

<code>text</code> के निकाले गए सभी नियंत्रण वर्णों के साथ एक पाठ मान लौटाता है.


## Examples

### Example #1 
पाठ मान से पंक्ति फ़ीड और अन्य नियंत्रण वाले वर्ण निकालें.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
