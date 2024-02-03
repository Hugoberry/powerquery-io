---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

केस-संवेदी तुलनाकर्ता फ़ंक्शन लौटाता है जो मानों की तुलना करने के लिए क्रमसूचक नियमों का उपयोग करता है.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

एक केस-असंवेदनशील तुलनाकर्ता फ़ंक्शन लौटाता है जो दिए गए मान <code>x</code> और <code>y</code> की तुलना करने के लिए सामान्य नियमों का उपयोग करता है.<br />        <br />        दिए गए मानों की तुलना करने के लिए क्रमसूचक नियमों का उपयोग करता है. मिलानकर्ता फ़ंक्शन दो तर्कों को स्वीकार करता है और पहला मान दूसरे से कम, बराबर या अधिक है या नहीं इसके आधार पर -1, 0 या 1 लौटाता है.    


## Examples

### Example #1 
केस-संवेदी क्रमसूचक नियमों का उपयोग करके, &#34;Abc&#34; की तुलना &#34;abc&#34; से करें. ध्यान दें &lt;code&gt;Comparer.Ordinal&lt;/code&gt; का उपयोग करने वाले &#34;abc&#34; की तुलना में &#34;Abc&#34; कम है. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
