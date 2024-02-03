---
title: Date.AddMonths
---

# Date.AddMonths


## Description

निर्दिष्ट महीनों को दिनांक में जोड़ता है.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

<code>datetime</code> मान <code>dateTime</code> में <code>numberOfMonths</code> महीना जोड़ने से <code>तिथि</code>, <code>datetime</code> या <code>datetimezone</code> परिणाम लौटाता है.      <ul>        <li><code>dateTime</code>: <code>तिथि</code>, <code>datetime</code> या <code>datetimezone</code> वे मान हैं, जिनमें महीनों को जोड़ा जा रहा है.</li>        <li><code>numberOfMonths</code>: जोड़ने के लिए महीनों की संख्या.</li>      </ul>


## Examples

### Example #1 
दिनांक 5/14/2011 का प्रतिनिधित्व करने वाले &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; या &lt;code&gt;datetimezone&lt;/code&gt; मान में 5 महीने जोड़ें.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
दिनांक और समय 5/14/2011 08:15:22 पूर्वाह्न का प्रतिनिधित्व करने वाले &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; या &lt;code&gt;datetimezone&lt;/code&gt; मान में 18 महीने जोड़ें.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
