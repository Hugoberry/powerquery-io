---
title: Text.TrimStart
---

# Text.TrimStart


## Description

अगले सभी सफेद रिक्त स्थान निकालता है.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

पाठ मान <code>text</code> से निकाले गए सभी अगले सफेद रिक्त स्थान का परिणाम लौटाता है.


## Examples

### Example #1 
&#34;     a b c d    &#34; से अगले सफेद रिक्त स्थान निकालें.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
