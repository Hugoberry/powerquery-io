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

पाठ मान `text` में पाठ मान `old` की सभी आवृत्तियों को पाठ मान `new` से प्रस्थापित करने का परिणाम लौटाता है. यह फ़ंक्शन केस संवेदी है.


## Examples

### Example #1
वाक्य में "the" की प्रत्येक आवृत्ति को "a" से बदलें.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
