---
title: Duration.ToRecord
---

# Duration.ToRecord


Returnerer en post, der indeholder delene af varigheden.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Returnerer en post, der indeholder delene af varighedsværdien, <code>duration</code>.  <ul>        <li><code>duration</code>: En værdi af typen <code>duration</code>, som posten er oprettet ud fra.</li>      </ul>


## Examples

### Example #1 
Konvertér &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; til en post af delene, herunder dage, timer, minutter og evt. sekunder.
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
