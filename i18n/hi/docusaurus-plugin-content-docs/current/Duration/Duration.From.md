---
title: Duration.From
---

# Duration.From


दिए गए मान से एक अवधि बनाता है.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

दिए गए <code>value</code> से <code>अवधि</code> मान वापस करता है. यदि दिया गया <code>value</code> <code>नल</code> है, तो <code>Duration.From</code> <code>नल</code> वापस करता है.  यदि दिया गया <code>value</code> <code>अवधि</code> है, तो <code>value</code> वापस किया जाता है. निम्न प्रकार के मान को <code>अवधि</code> मान में रूपांतरित किया जा सकता है:      <ul>        <li><code>text</code>: पाठ व्यतीत समय स्वरूप (d.h:m:s) से <code>अवधि</code> मान . विवरण के लिए <code>Duration.FromText</code> का संदर्भ लें.</li>        <li><code>संख्या</code>: <code>अवधि</code> जो पूर्णांक और आंशिक दिनों की संख्या के समान है, जिसे <code>value</code> द्वारा व्यक्त किया जाता है.</li>      </ul>यदि <code>value</code> अन्य प्रकार का है, तो त्रुटि वापस होती है.


## Examples

### Example #1 
&lt;code&gt;2.525&lt;/code&gt; को एक &lt;code&gt;duration&lt;/code&gt; मान में रूपांतरित करें.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
