---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Returnerar en post som innehåller delarna i varaktigheten.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Returnerar en post som innehåller delarna i varaktighetsvärdet <code>duration</code>.  <ul>        <li><code>duration</code>: Ett <code>duration</code>-värde som posten skapas från.</li>      </ul>


## Examples

### Example #1 
Konvertera &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; till en post med dess delar: dagar, timmar, minuter och sekunder (om tillämpligt).
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
