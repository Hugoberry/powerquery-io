---
title: Date.Day
---

# Date.Day


## Description

दिन घटक लौटाता है.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

किसी <code>तिथि</code>, <code>datetime</code> या <code>datetimezone</code> मान का दिन घटक लौटाता है.      <ul>        <li><code>dateTime</code>: एक ऐसा <code>तिथि</code>, <code>datetime</code> या <code>datetimezone</code> मान, जिससे दिन घटक निकाला जाता है.</li>      </ul>


## Examples

### Example #1 
5/14/2011 05:00:00 अपराह्न के दिनांक और समय का प्रतिनिधित्व करने वाले &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; या &lt;code&gt;datetimezone&lt;/code&gt; मान का दिन घटक प्राप्त करें.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
