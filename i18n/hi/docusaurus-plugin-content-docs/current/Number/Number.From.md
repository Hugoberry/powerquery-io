---
title: Number.From
---

# Number.From


## Description

दिए गए मान से एक संख्या बनाता है.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

दिए गए <code>value</code> से एक <code>संख्या</code> मान वापस करता है.एक वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").यदि दिया गया <code>value</code> <code>नल</code> है, तो <code>Number.From</code> <code>नल</code> वापस करता है. यदि दिया गया <code>value</code> <code>संख्या</code> है, तो <code>value</code> लौटाया जाता है. निम्न प्रकार के मानों को एक <code>संख्या</code> मान में रूपांतरित किया जा सकता है:      <ul>        <li><code>पाठ</code>: पाठ प्रस्तुतिकरण से एक <code>संख्या</code> मान. सामान्य पाठ फ़ॉर्मेंट संभाले जाते हैं ("15", "3,423.10", "5.0E-10"). विवरण के लिए <code>Number.FromText</code> देखें.</li>        <li><code>तार्किक</code>: <code>सत्य</code> के लिए 1, <code>गलत</code> के लिए 0.</li>        <li><code> तिथिसमय</code>: एक दोहरी-परिशुद्धता फ़्लोटिंग पॉइंट संख्या जिसमें समतुल्य OLE स्वचालन तिथि शामिल होती है. </li>        <li><code>datetimezone</code>: एक दोहरी-परिशुद्धता फ़्लोटिंग पॉइंट संख्या जिसमें <code>value</code> के स्थानीय तिथि और समय के समतुल्य OLE स्वचालन तिथि शामिल होती है. </li>        <li><code>तिथि</code>: एक दोहरी-परिशुद्धता फ़्लोटिंग पॉइंट संख्या जिसमें समतुल्य OLE स्वचालन तिथि शामिल होती है.</li>        <li><code>समय</code>:  आंशिक दिनों में व्यक्त.</li>        <li><code>अवधि</code>: पूर्णांक और आंशिक दिनों में व्यक्त.</li>         </ul>/यदि <code>value</code> किसी भी अन्य प्रकार का है, तो एक त्रुटि लौटाई जाती है.


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; का &lt;code&gt;number&lt;/code&gt; मान प्राप्त करें.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt; का &lt;code&gt;number&lt;/code&gt; मान प्राप्त करें.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
&lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; का मान &lt;code&gt;संख्या&lt;/code&gt; प्राप्त करें.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
