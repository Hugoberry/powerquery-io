---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Returnerar en post som innehåller delarna i time-värdet.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Returnerar en post som innehåller delarna i det angivna tidsvärdet <code>time</code>. <ul>        <li><code>time</code>: Ett <code>time</code>-värde som posten med värdets delar ska beräknas från.</li>      </ul>


## Examples

### Example #1 
Konvertera &lt;code&gt;#time(11, 56, 2)&lt;/code&gt;-värdet till en post som innehåller tidsvärden.
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
