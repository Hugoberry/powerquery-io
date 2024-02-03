---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Vrátí záznam obsahující části hodnoty datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Vrátí záznam obsahující části předané hodnoty datetime, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Hodnota <code>datetime</code>, ze které bude vypočítán záznam jejích částí.</li>      </ul>


## Examples

### Example #1 
Převést hodnotu &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; na záznam obsahující hodnoty data a času
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
