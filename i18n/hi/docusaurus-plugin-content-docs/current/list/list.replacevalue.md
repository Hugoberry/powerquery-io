---
title: List.ReplaceValue
---

# List.ReplaceValue


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


## Remarks

मान `oldValue` के लिए मानों की एक सूची, `list`, खोजता है और उसकी प्रत्येक आवृत्ति को प्रतिस्थापन मान `newValue` के साथ प्रतिस्थापित करता है.


## Examples

### Example #1
सूची \{"a", "B", "a", "a"\} के सभी "a" मानों को "A" के साथ प्रतिस्थापित करता है.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
