---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

28 से 31 तक की संख्या लौटाता है जो महीने के दिनों की संख्या को इंगित करती है.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

महीने के दिनों की संख्या को <code>तिथि</code>, <code>datetime</code> या <code>datetimezone</code> मान <code>dateTime</code> में लौटाता है. <ul>        <li><code>dateTime</code>: एक ऐसा <code>तिथि</code>, <code>datetime</code> या <code>datetimezone</code> मान, जिसके लिए महीने के दिनों की संख्या लौटाई जाती है.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt; द्वारा प्रस्तुत किए गए अनुसार दिसंबर महीने के दिनों की संख्या.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
