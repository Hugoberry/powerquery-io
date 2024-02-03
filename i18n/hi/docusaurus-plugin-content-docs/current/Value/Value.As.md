---
title: Value.As
---

# Value.As


## Description

मान लौटाता है यदि यह निर्दिष्ट प्रकार के साथ संगत हो.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

मान लौटाता है यदि यह निर्दिष्ट प्रकार के साथ संगत हो. यह M में "है" ऑपरेटर के समकक्ष है, इस अपवाद के साथ कि यह Number. Type जैसे पहचानकर्ता प्रकार संदर्भों को स्वीकार कर सकता है.


## Examples

### Example #1 
एक नंबर को किसी नंबर में कास्ट करें.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
किसी नंबर पर पाठ मान कास्ट करने की कोशिश करें.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
