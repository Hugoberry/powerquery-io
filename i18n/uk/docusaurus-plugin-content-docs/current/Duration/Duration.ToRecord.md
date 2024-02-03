---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Повертає запис, що містить частини тривалості.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Повертає запис, що містить частини значення тривалості <code>duration</code>.  <ul>        <li><code>duration</code>: значення <code>duration</code>, на основі якого створюється запис.</li>      </ul>


## Examples

### Example #1 
Перетворити &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; на запис її частин, включно із днями, годинами, хвилинами та секундами, якщо доречно.
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
