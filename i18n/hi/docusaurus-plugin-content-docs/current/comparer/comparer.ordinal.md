---
title: Comparer.Ordinal
---

# Comparer.Ordinal


वह तुलनाकर्ता फ़ंक्‍शन लौटाता है जो मानों की तुलना करने के लिए क्रमसूचक नियमों का उपयोग करता है.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

एक तुलनाकर्ता फ़ंक्शन लौटाता है जो दिए गए मान `x` और `y` की तुलना करने के लिए सामान्य नियमों का उपयोग करता है.  
  
दिए गए मानों की तुलना करने के लिए क्रमसूचक नियमों का उपयोग करता है. मिलानकर्ता फ़ंक्शन दो तर्कों को स्वीकार करता है और पहला मान दूसरे से कम, बराबर या अधिक है या नहीं इसके आधार पर -1, 0 या 1 लौटाता है.


## Examples

### Example #1
क्रमसूचक नियमों का उपयोग करके, तुलना करें कि क्या "encyclopædia" और "encyclopaedia" समान हैं. ध्यान दें कि ये `Comparer.FromCulture("en-US")` का उपयोग करने पर समान होते हैं.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
