---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Күн мәнінің бөліктерін қамтитын жазбаны қайтарады.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Берілген күн мәнінің, <code>date</code>, бөліктерін қамтитын жазбаны қайтарады. <ul>        <li><code>date</code>: бөліктерінің жазбасы есептелетін <code>date</code> мәні</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; мәнін күн мәнінің бөліктерін қамтитын жазбаға түрлендіру.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
