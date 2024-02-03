---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Күн және уақыт мәнінің бөліктерін қамтитын жазбаны қайтарады.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Берілген күн және уақыт мәнінің, <code>dateTime</code>, бөліктерін қамтитын жазбаны қайтарады. <ul>        <li><code>dateTime</code>: бөліктерінің жазбасы есептелетін <code>datetime</code> мәні.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; мәнін күн және уақыт мәндерін қамтитын жазбаға түрлендіру.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
