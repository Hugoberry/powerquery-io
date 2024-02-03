---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

ऐसा फ़ंक्शन लौटाता है जो निर्दिष्ट आउटपुट स्थितियों का उपयोग करके टेक्स्ट की सूची को संयोजित करता है.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

ऐसा फ़ंक्शन लौटाता है जो निर्दिष्ट आउटपुट स्थितियों का उपयोग करके टेक्स्ट मानों की सूची को सिंगल टेक्स्ट मान में संयोजित करता है.


## Examples

### Example #1 
टेक्स्ट मानों की सूची को निर्दिष्ट स्थितियों पर आउटपुट में रखकर संयोजित करें.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
