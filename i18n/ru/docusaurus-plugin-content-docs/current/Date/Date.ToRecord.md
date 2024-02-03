---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Возвращает запись, содержащую части значения даты.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Возвращает запись, содержащую части заданного значения даты, <code>date</code>. <ul>        <li><code>date</code>: значение <code>date</code>, для которого необходимо вычислить запись частей.</li>      </ul>


## Examples

### Example #1 
Преобразовать значение &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; в запись, содержащую состоит значения даты.
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
