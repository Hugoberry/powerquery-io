---
title: Time.ToRecord
---

# Time.ToRecord


Retorna um registro contendo as partes do valor Time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Retorna um registro contendo as partes do valor Time especificado, <code>time</code>. <ul>        <li><code>time</code>: um valor <code>time</code> com base no qual o registro das partes será calculado.</li>      </ul>


## Examples

### Example #1 
Converta o valor &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; em um registro contendo os valores Time.
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
