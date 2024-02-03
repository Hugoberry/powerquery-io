---
title: Text.Select
---

# Text.Select


## Description

इनपुट पाठ मान से दिए गए वर्ण या वर्णों की सूची की सभी आवृत्तियों को चयनित करता है।


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

निकाले गए <code>selectChars</code> में नहीं मौजूद सभी वर्णों के साथ पाठ मान <code>text</code> की प्रतिलिपि लौटाता है।  


## Examples

### Example #1 
पाठ मान से &#39;ए&#39; से लेकर &#39;ज़ेड&#39; की श्रेणी में सभी वर्णों का चयन करें।
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
