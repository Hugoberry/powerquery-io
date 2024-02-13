---
title: Text.Trim
---

# Text.Trim


अगले और पिछले सभी सफेद रिक्त स्थान निकालता है.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

पाठ मान <code>text</code> से निकाले गए सभी अगले और पिछले सफेद रिक्त स्थान का परिणाम लौटाता है.


## Examples

### Example #1 
&#34;     a b c d    &#34; से अगले और पिछले सफेद रिक्त स्थान निकालें.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
