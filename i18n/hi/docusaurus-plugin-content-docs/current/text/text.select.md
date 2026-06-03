---
title: Text.Select
---

# Text.Select


इनपुट पाठ मान से दिए गए वर्ण या वर्णों की सूची की सभी आवृत्तियों को चयनित करता है।


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

निकाले गए `selectChars` में नहीं मौजूद सभी वर्णों के साथ पाठ मान `text` की प्रतिलिपि लौटाता है।


## Examples

### Example #1
पाठ मान से 'ए' से लेकर 'ज़ेड' की श्रेणी में सभी वर्णों का चयन करें।
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
