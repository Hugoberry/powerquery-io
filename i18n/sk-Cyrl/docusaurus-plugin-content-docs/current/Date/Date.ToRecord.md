---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Vráti záznam obsahujúci časti hodnoty dátumu.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Vráti záznam obsahujúci časti danej hodnoty date <code>date</code>. <ul>        <li><code>date</code>: Hodnota <code>date</code>, z ktorej častí sa vypočíta príslušný záznam.</li>      </ul>


## Examples

### Example #1 
Konvertuje hodnotu &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; na záznam obsahujúci časti z hodnoty dátumu.
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
