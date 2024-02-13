---
title: Date.AddYears
---

# Date.AddYears


निर्दिष्ट वर्षों को दिनांक में जोड़ता है.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

<code>datetime</code> मान <code>dateTime</code> में <code>numberOfYears</code> जोड़ने से <code>तिथि</code>, <code>datetime</code> या <code>datetimezone</code> परिणाम लौटाता है.      <ul>        <li><code>dateTime</code>: <code>तिथि</code>, <code>datetime</code> या <code>datetimezone</code> वे मान हैं, जिनमें वर्षों को जोड़ा जा रहा है.</li>        <li><code>numberOfYears</code>: जोड़ने के लिए वर्षों की संख्या.</li>      </ul>


## Examples

### Example #1 
दिनांक 5/14/2011 का प्रतिनिधित्व करने वाले &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; या &lt;code&gt;datetimezone&lt;/code&gt; मान में 4 वर्ष जोड़ें.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
दिनांक और समय 5/14/2011 08:15:22 पूर्वाह्न का प्रतिनिधित्व करने वाले &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; या &lt;code&gt;datetimezone&lt;/code&gt; मान में 10 वर्ष जोड़ें.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
