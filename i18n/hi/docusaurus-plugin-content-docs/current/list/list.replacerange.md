---
title: List.ReplaceRange
---

# List.ReplaceRange


स्थिति पर प्रारंभ होने वाले मानों की गणना संख्या को प्रतिस्थापन मानों के साथ प्रतिस्थापित करता है.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Remarks

`list` के `count` मानों को निर्दिष्ट स्थिति, `index` पर प्रारंभ होने वाली सूची `replaceWith`, के साथ प्रतिस्थापित करता है.


## Examples

### Example #1
सूची \{1, 2, 7, 8, 9, 5\} के \{7, 8, 9\} को \{3, 4\} के साथ प्रतिस्थापित करें.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
