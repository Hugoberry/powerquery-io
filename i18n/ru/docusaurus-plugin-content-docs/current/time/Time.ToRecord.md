---
title: Time.ToRecord
---

# Time.ToRecord


Возвращает запись, содержащую части значения Time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Возвращает запись, содержащую части заданного значения времени, <code>time</code>. <ul>        <li><code>time</code>: значение <code>time</code>, для которого необходимо вычислить запись частей.</li>      </ul>


## Examples

### Example #1 
Преобразовать значение &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; в запись, содержащую значения времени.
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
