---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Уақыт мәнінің бөліктерін қамтитын жазбаны қайтарады.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Осы уақыт мәнінің, <code>time</code>, бөліктерін қамтитын жазбаны қайтарады. <ul>        <li><code>time</code>: бөліктерінің жазбасы есептелетін <code>time</code> мәні.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#time(11, 56, 2)&lt;/code&gt; мәнін уақыт мәндерін қамтитын жазбаға түрлендіру.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
