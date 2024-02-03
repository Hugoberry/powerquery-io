---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Vráti záznam obsahujúci časti hodnoty času.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Vráti záznam obsahujúci časti danej hodnoty time <code>time</code>. <ul>        <li><code>time</code>: Hodnota <code>time</code>, z ktorej častí sa vypočíta príslušný záznam.</li>      </ul>


## Examples

### Example #1 
Konvertuje hodnotu &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; na záznam obsahujúci hodnoty času.
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
