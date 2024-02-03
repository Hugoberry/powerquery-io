---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Retourneert een record die de onderdelen van de duur bevat.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Hiermee wordt een record geretourneerd met de onderdelen van de duur-waarde, <code>duration</code>. <ul> <li><code>duration</code>: een <code>duration</code> op basis waarvan de record wordt gemaakt.</li> </ul>


## Examples

### Example #1 
&lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; omzetten in een record van de onderdelen, inclusief dagen, uren, minuten en seconden, indien van toepassing.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
