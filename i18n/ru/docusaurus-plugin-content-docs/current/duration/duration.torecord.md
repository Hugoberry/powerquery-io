---
title: Duration.ToRecord
---

# Duration.ToRecord


Возвращает запись, содержащую части длительности.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Возвращает запись, содержащую части значения длительности, <code>duration</code>.  <ul>        <li><code>duration</code>: значение <code>duration</code>, на основе которого создается запись.</li>      </ul>


## Examples

### Example #1 
Преобразование &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; в запись его частей, включая дни, часы, минуты и секунды, если применимо.
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
