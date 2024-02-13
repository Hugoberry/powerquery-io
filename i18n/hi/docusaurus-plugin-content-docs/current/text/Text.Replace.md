---
title: Text.Replace
---

# Text.Replace


पाठ में दी गई सबस्ट्रिंग की सभी आवृत्तियों को प्रतिस्थापित करता है.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

पाठ मान <code>text</code> में पाठ मान <code>old</code> की सभी आवृत्तियों को पाठ मान <code>new</code> से प्रस्थापित करने का परिणाम लौटाता है. यह फ़ंक्शन केस संवेदी है.


## Examples

### Example #1 
वाक्य में &#34;the&#34; की प्रत्येक आवृत्ति को &#34;a&#34; से बदलें.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
