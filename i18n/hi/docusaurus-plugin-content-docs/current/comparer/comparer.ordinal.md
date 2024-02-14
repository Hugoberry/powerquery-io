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

एक तुलनाकर्ता फ़ंक्शन लौटाता है जो दिए गए मान <code>x</code> और <code>y</code> की तुलना करने के लिए सामान्य नियमों का उपयोग करता है.<br />        <br />        दिए गए मानों की तुलना करने के लिए क्रमसूचक नियमों का उपयोग करता है. मिलानकर्ता फ़ंक्शन दो तर्कों को स्वीकार करता है और पहला मान दूसरे से कम, बराबर या अधिक है या नहीं इसके आधार पर -1, 0 या 1 लौटाता है.    


## Examples

### Example #1 
क्रमसूचक नियमों का उपयोग करके, तुलना करें कि क्या &#34;encyclopædia&#34; और &#34;encyclopaedia&#34; समान हैं. ध्यान दें कि ये &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt; का उपयोग करने पर समान होते हैं. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
