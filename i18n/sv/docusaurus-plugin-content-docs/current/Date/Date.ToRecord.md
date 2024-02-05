---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Returnerar en post som innehåller delarna i datumvärdet.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Returnerar en post som innehåller delarna i det angivna datumvärdet <code>date</code>. <ul>        <li><code>date</code>: Ett <code>date</code>-värde som posten med värdets delar ska beräknas från.</li>      </ul>


## Examples

### Example #1 
Konvertera &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt;-värdet till en post som innehåller delar från datumvärdet.
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
