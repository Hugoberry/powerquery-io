---
title: Binary.From
---

# Binary.From


## Description

दिए गए मान से एक बाइनरी बनाता है


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

दिए गए <code>value</code> से <code>बाइनरी</code> मान वापस करता है. यदि दिया गया <code>value</code> <code>नल</code> है, तो <code>Binary.From</code> <code>नल</code> वापस करता है.  यदि दिया गया <code>value</code> <code>बाइनरी</code> है, तो <code>value</code> वापस किया जाता है. Values निम्न प्रकार के मान को <code>बाइनरी</code> मान का उपयोग करके रूपांतरित किया जा सकता है:      <ul>        <li><code>पाठ</code>: पाठ प्रस्तुतिकरण से <code>बाइनरी</code> मान. विवरण के लिए <code>Binary.FromText</code> का संदर्भ लें.</li>      </ul>यदि <code>value</code> किसी अन्य प्रकार का है, तो त्रुटि वापस की जाती है.


## Examples

### Example #1 
&lt;code&gt;&#34;1011&#34;&lt;/code&gt; का &lt;code&gt;binary&lt;/code&gt; मान प्राप्त करें.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
