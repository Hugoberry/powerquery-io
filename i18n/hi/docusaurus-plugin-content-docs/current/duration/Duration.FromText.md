---
title: Duration.FromText
---

# Duration.FromText


व्यतीत समय स्वरूप (d.h:m:s) पाठ से अवधि मान लौटाता है.


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

निर्दिष्ट पाठ <code>text</code> से एक अवधि मान लौटाता है. इस फ़ंक्शन द्वारा निम्न फ़ॉर्मैट्स को पार्स किया जा सकता है: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (सभी श्रेणियाँ समावेशी हैं)<br />        ddd: दिनों की संख्या.<br />        hh: 0 और 23 के बीच घंटों की संख्या.<br />        mm: 0 और 59 के बीच मिनट्स की संख्या.<br />        ss: 0 और 59 के बीच सेकंड्स की संख्या.<br />        ff: 0 और 9999999 के बीच सेकंड्स के अंश.


## Examples

### Example #1 
&lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; को एक &lt;code&gt;duration&lt;/code&gt; मान में रूपांतरित करें.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
