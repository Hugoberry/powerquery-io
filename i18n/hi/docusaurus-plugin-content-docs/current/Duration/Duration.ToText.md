---
title: Duration.ToText
---

# Duration.ToText


## Description

&#34;d.h:m:s&#34; स्वरूप का पाठ लौटाता है.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

दिए गए अवधि मान <code>duration</code> के लिए "day.hour:mins:sec" के रूप में पाठ प्रस्तुतिकरण लौटता है. <ul>        <li><code>duration</code>: वह <code>अवधि</code> जिससे पाठ प्रस्तुतिकरण की गणना की जाती है.</li>  <li><code>format</code>: <i>[Optional]</i> डेप्रिकेटेड, नल नहीं होने पर एक त्रुटि भेजेगा</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; को एक पाठ मान में रूपांतरित करें.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
