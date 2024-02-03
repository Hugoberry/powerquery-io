---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

निर्दिष्ट मान के लिए एक सूची खोजता है और उसे प्रतिस्थापित करता है.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Details

मान <code>oldValue</code> के लिए मानों की एक सूची, <code>list</code>, खोजता है और उसकी प्रत्येक आवृत्ति को प्रतिस्थापन मान <code>newValue</code> के साथ प्रतिस्थापित करता है.


## Examples

### Example #1 
सूची \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} के सभी &#34;a&#34; मानों को &#34;A&#34; के साथ प्रतिस्थापित करता है.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
