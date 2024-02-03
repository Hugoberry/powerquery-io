---
title: List.Single
---

# List.Single


## Description

लंबाई एक की सूची के लिए एक सूची आइटम लौटाता है अन्यथा एक अपवाद दिखाता है.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

यदि सूची <code>list</code> में केवल एक आइटम है, तो उस आइटम को लौटाता है.    यदि एक से अधिक आइटम हैं या सूची रिक्त है, तो फ़ंक्शन एक अपवाद लौटाता है.


## Examples

### Example #1 
सूची \{1} का एकल मान प्राप्त करें.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
सूची \{1, 2, 3} का एकल मान प्राप्त करें.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
