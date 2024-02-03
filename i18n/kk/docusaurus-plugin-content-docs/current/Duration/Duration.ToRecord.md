---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Ұзақтықтың бөліктерін қамтитын жазбаны қайтарады.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

<code>duration</code> ұзақтық мәнінің бөліктерін қамтитын жазбаны қайтарады.  <ul>        <li><code>duration</code>: жазба жасалған <code>duration</code>.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; мәнін тиісті болса, күндерді, сағаттарды, минуттарды және секундтарды қамтитын бөліктерінің жазбасына түрлендіру.
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
