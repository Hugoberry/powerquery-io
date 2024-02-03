---
title: Date.AddDays
---

# Date.AddDays


## Description

निर्दिष्ट दिनों को दिनांक में जोड़ता है.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

<code>datetime</code> मान <code>dateTime</code> में <code>numberOfDays</code> दिन जोड़ने से आने वाला <code>date</code>, <code>datetime</code> या <code>datetimezone</code> परिणाम लौटाता है.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> या <code>datetimezone</code> वे मान हैं जिनमें दिनों को जोड़ा जा रहा है.</li>      <li><code>numberOfDays</code>: जोड़ने के लिए दिनों की संख्या.</li>      </ul>


## Examples

### Example #1 
दिनांक 5/14/2011 का प्रतिनिधित्व करने वाले &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; या &lt;code&gt;datetimezone&lt;/code&gt; मान में 5 दिन जोड़ें.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
