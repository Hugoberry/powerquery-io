---
title: Logical.From
---

# Logical.From


दिए गए मान से एक तार्किक मान बनाता है.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

दिए गए <code>value</code> से एक <code>तार्किक</code> मान लौटाता है. यदि दिया गया <code>value</code> <code>नल</code> है, तो <code> Logical.From</code> <code>नल</code> लौटाता है.  यदि दिया गया <code>value</code> <code>तार्किक</code> है, तो <code>value</code> लौटाया जाता है. निम्न प्रकार के मानों को एक <code>तार्किक</code> मान में रूपांतरित किया जा सकता है:      <ul>        <li><code>पाठ</code>: पाठ मान से एक <code>तार्किक</code> मान, या तो <code>"true"</code> या <code>"false"</code>. विवरण के लिए <code>Logical.FromText</code> देखें.</li>        <li><code>संख्या</code>: यदि <code>value</code> <code>0</code> के बराबर है तो <code>गलत</code> अन्यथा<code>सत्य</code>.</li>      </ul>यदि <code>value</code> किसी भी अन्य प्रकार का है, तो एक त्रुटि लौटाई जाती है.


## Examples

### Example #1 
&lt;code&gt;2&lt;/code&gt; को एक &lt;code&gt;logical&lt;/code&gt; मान में रूपांतरित करें.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
