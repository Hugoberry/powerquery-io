---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


केस-संवेदी तुलनाकर्ता फ़ंक्शन लौटाता है जो मानों की तुलना करने के लिए क्रमसूचक नियमों का उपयोग करता है.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

एक केस-असंवेदनशील तुलनाकर्ता फ़ंक्शन लौटाता है जो दिए गए मान `x` और `y` की तुलना करने के लिए सामान्य नियमों का उपयोग करता है.  
  
दिए गए मानों की तुलना करने के लिए क्रमसूचक नियमों का उपयोग करता है. मिलानकर्ता फ़ंक्शन दो तर्कों को स्वीकार करता है और पहला मान दूसरे से कम, बराबर या अधिक है या नहीं इसके आधार पर -1, 0 या 1 लौटाता है.


## Examples

### Example #1
केस-संवेदी क्रमसूचक नियमों का उपयोग करके, "Abc" की तुलना "abc" से करें. ध्यान दें `Comparer.Ordinal` का उपयोग करने वाले "abc" की तुलना में "Abc" कम है.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
