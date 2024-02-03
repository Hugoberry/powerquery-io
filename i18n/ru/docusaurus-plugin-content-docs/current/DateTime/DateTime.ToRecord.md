---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Возвращает запись, содержащую части значения datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Возвращает запись, содержащую части заданного значения datetime, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: значение <code>datetime</code>, для которого необходимо вычислить запись частей.</li>      </ul>


## Examples

### Example #1 
Преобразование значения &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; в запись, содержащую значения даты и времени.
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
