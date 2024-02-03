---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Повертає запис, що містить частини значення дати.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Повертає запис, що містить частини заданого значення дати <code>date</code>. <ul>        <li><code>date</code>: значення <code>date</code>, на основі якого слід обчислити запис частин.</li>      </ul>


## Examples

### Example #1 
Перетворити значення &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; на запис, що містить частини значення дати.
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
