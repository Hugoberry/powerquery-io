---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Vrátí záznam obsahující části hodnoty time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Vrátí záznam obsahující části předané hodnoty time <code>time</code>. <ul>        <li><code>time</code>: Hodnota <code>time</code>, ze které bude vypočítán záznam jejích částí.</li>      </ul>


## Examples

### Example #1 
Převede hodnotu &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; na záznam obsahující hodnoty time.
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
