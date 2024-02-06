---
title: Decimal.From
---

# Decimal.From


दिए गए मान से दशमलव बनाएं.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

दिए गए <code>value</code> से दशमलव <code>संख्या</code> मान वापस करता है. यदि दिया गया <code>value</code> <code>नल</code> है, तो <code>Decimal.From</code> <code>नल</code> वापस करता है.  यदि दिया गया <code>value</code> <code>संख्या</code> है जो दशमलव की श्रेणी में है, तो <code>value</code> वापस किया जाता है अन्यथा त्रुटि वापस की जाती है. यदि <code>value</code> किसी अन्य प्रकार का है, तो पहले वह <code>Number.FromText</code> का उपयोग करके <code>संख्या</code> में रूपांतरित होगा. वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
&lt;code&gt;&#34;4.5&#34;&lt;/code&gt; का दशमलव &lt;code&gt;संख्यात्मक&lt;/code&gt; मान प्राप्त करें.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
