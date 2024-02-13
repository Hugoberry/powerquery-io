---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


ऐसा फ़ंक्शन लौटाता है जो निर्दिष्ट स्थितियों और लंबाई का उपयोग करके टेक्स्ट की सूची को संयोजित करता है.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Remarks

ऐसा फ़ंक्शन लौटाता है जो निर्दिष्ट आउटपुट स्थितियों और लंबाई का उपयोग करके टेक्स्ट मानों की सूची को सिंगल टेक्स्ट मान में संयोजित करता है. शून्य लंबाई बताती है कि संपूर्ण टेक्स्ट मान शामिल किया जाना चाहिए.


## Examples

### Example #1 
निर्दिष्ट आउटपुट स्थितियों और लंबाई का उपयोग करके टेक्स्ट मानों की सूची संयोजित करें.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
