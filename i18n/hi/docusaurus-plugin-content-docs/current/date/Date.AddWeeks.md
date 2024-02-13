---
title: Date.AddWeeks
---

# Date.AddWeeks


निर्दिष्ट सप्ताहों को दिनांक में जोड़ता है.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

<code>datetime</code> मान <code>dateTime</code> में <code>numberOfWeeks</code> सप्ताह जोड़ने से आने वाला <code>date</code>, <code>datetime</code> या <code>datetimezone</code> परिणाम लौटाता है.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> या <code>datetimezone</code> वे मान हैं जिनमें सप्ताहों को जोड़ा जा रहा है.</li>      <li><code>numberOfWeeks</code>: जोड़ने के लिए सप्ताहों की संख्या.</li>      </ul>


## Examples

### Example #1 
दिनांक 5/14/2011 का प्रतिनिधित्व करने वाले &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; या &lt;code&gt;datetimezone&lt;/code&gt; मान में 2 सप्ताह जोड़ें.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
