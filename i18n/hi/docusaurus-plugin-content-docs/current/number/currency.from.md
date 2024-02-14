---
title: Currency.From
---

# Currency.From


दिए गए मूल्य से मुद्रा मूल्य लौटाता है.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

दिए गए <code>value</code> से <code>currency</code> मान वापस करता है. यदि दिया गया <code>value</code> <code>नल</code> है, तो <code>Currency.From</code> <code>नल</code> वापस करता है.  यदि दिया गया <code>value</code> मुद्रा की श्रेणी में <code>संख्या</code> है, तो <code>value</code> के आंशिक भाग को 4 दशमलव अंकों में पूरा बनाकर वापस किया जाता है. यदि<code>value</code> किसी अन्य प्रकार का है, तो उसे सबसे पहले <code>Number.FromText</code>का उपयोग करके <code>संख्या</code> में रूपांतरित किया जाएगा. मुद्रा के लिए मान्य श्रेणी <code>-922,337,203,685,477.5808</code> से लेकर <code>922,337,203,685,477.5807</code>है. उपलब्ध राउंडिंग मोड के लिए<code>Number.Round</code> देखें. डिफ़ॉल्ट <code>RoundingMode.ToEven</code> है. वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
&lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; का &lt;code&gt;मुद्रा&lt;/code&gt; मूल्य प्राप्त करें.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
&lt;code&gt;RoundingMode.Down&lt;/code&gt; का उपयोग करके &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; का &lt;code&gt;मुद्रा&lt;/code&gt; मान प्राप्त करें.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
