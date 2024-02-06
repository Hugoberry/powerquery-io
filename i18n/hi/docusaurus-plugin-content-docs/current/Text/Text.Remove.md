---
title: Text.Remove
---

# Text.Remove


इनपुट पाठ मान से दिए गए वर्ण या वर्णों की सूची की सभी आवृत्तियों को निकालता है.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

<code>removeChars</code> से निकाले गए सभी वर्णों के साथ पाठ मान <code>text</code> की प्रति लौटाता है.  


## Examples

### Example #1 
पाठ मान से वर्ण और ; निकालें.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
