---
title: Value.Is
---

# Value.Is


निर्धारित करता है कि क्या कोई मान निर्दिष्ट प्रकार के साथ संगत है.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Remarks

यह निर्धारित करता है कि क्या कोई मान निर्दिष्ट प्रकार के साथ संगत है. यह M में "है" ऑपरेटर के समकक्ष है, इस अपवाद के साथ कि यह Number. Type जैसे पहचानकर्ता प्रकार संदर्भों को स्वीकार कर सकता है.


## Examples

### Example #1 
क्या कोई नंबर, प्रकार नंबर के साथ संगत है, यह निर्धारित करने के दो तरीकों की तुलना करें.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
