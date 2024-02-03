---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Повертає запис, що містить частини значення дати й часу.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Повертає запис, що містить частини заданого значення дати й часу <code>dateTime</code>. <ul>        <li><code>dateTime</code>: значення <code>datetime</code>, на основі якого слід обчислити запис частин.</li>      </ul>


## Examples

### Example #1 
Перетворити значення &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; на запис, що містить значення дати й часу.
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
