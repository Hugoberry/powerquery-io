---
title: List.Single
---

# List.Single


एक लेंथ वाली सूची के लिए एक सूची आइटम लौटाता है, नहीं तो त्रुटि देता है.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

अगर सूची `list` में केवल एक आइटम है, तो उस आइटम को लौटाता है. आगे एक से अधिक आइटम हैं या सूची रिक्त है, तो फ़ंक्शन एक त्रुटि देता है.


## Examples

### Example #1
सूची \{1\} का एकल मान प्राप्त करें.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
सूची \{1, 2, 3\} का एकल मान प्राप्त करें.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
