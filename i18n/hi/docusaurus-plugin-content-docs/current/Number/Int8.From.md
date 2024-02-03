---
title: Int8.From
---

# Int8.From


## Description

दिए गए मान से साइन किए गए 8-बिट पूर्णांक बनाता है.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

दिए गए <code>value</code> से 8-बिट पूर्णांक <code>संख्या</code> मान वापस करता है. यदि दिया गया <code>value</code> <code>नल</code> है, तो <code>Int8.From</code><code>नल</code> वापस करता है.  यदि दी गई <code>value</code> <code>संख्या</code> आंशिक भाग के बिना 8-बिट पूर्णांक की श्रेणी में है, तो <code>value</code> वापस किया जाता है. यदि उसमें आंशिक भाग है, तो संख्या को राउंडिंग मोड निर्दिष्ट करके राउंड किया जाता है. डिफ़ॉल्ट राउंडिंग मोड <code>RoundingMode.ToEven</code> है. यदि <code>value</code> किसी अन्य प्रकार का है, तो पहले उसे <code>Number.FromText</code> का उपयोग करके <code>संख्या</code> में रूपांतरित किया जाएगा. उपलब्ध राउंडिंग मोड के लिए <code>Number.Round</code> देखें. वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; का साइन किया गया 8-बिट पूर्णांक &lt;code&gt;संख्यात्मक&lt;/code&gt; मान प्राप्त करें.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt; का उपयोग करके &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; का साइन किया गया 8-बिट पूर्णांक &lt;code&gt;संख्यात्मक&lt;/code&gt; मान प्राप्त करें.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
