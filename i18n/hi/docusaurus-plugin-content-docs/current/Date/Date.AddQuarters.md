---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

निर्दिष्ट तिमाहियों को दिनांक में जोड़ता है.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

<code>datetime</code> मान <code>dateTime</code> में <code>numberOfQuarters</code> तिमाहियाँ जोड़ने आने वाला <code>date</code>, <code>datetime</code> या <code>datetimezone</code> परिणाम लौटाता है.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> या <code>datetimezone</code> वे मान हैं जिनमें तिमाहियों को जोड़ा जा रहा है.</li>      <li><code>numberOfQuarters</code>: जोड़ने के लिए तिमाहियों की संख्या.</li>      </ul>


## Examples

### Example #1 
दिनांक 5/14/2011 का प्रतिनिधित्व करने वाले &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; या &lt;code&gt;datetimezone&lt;/code&gt; मान में 1 तिमाही जोड़ें.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
