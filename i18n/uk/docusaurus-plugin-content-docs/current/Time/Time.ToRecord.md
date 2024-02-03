---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Повертає запис, що містить частини значення часу.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Повертає запис, що містить частини заданого значення часу <code>time</code>. <ul>        <li><code>time</code>: значення <code>time</code>, на основі якого слід обчислити запис частин.</li>      </ul>


## Examples

### Example #1 
Перетворити значення &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; на запис, що містить значення часу.
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
