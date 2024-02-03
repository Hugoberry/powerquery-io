---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Vrátí záznam obsahující části hodnoty date.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Vrátí záznam obsahující části předané hodnoty date <code>date</code>. <ul>        <li><code>date</code>: Hodnota <code>date</code>, ze které bude vypočítán záznam jejích částí.</li>      </ul>


## Examples

### Example #1 
Převede hodnotu &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; na záznam obsahující části hodnoty date.
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
