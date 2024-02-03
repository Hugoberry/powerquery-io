---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Returnează o înregistrare ce conţine părţi din valoarea pentru oră.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Returnează o înregistrare care conține părți din valoarea de timp dată, <code>time</code>. <ul>        <li><code>time</code>: o valoare <code>time</code> pentru care urmează să fie calculată înregistrarea părților sale.</li>      </ul>


## Examples

### Example #1 
Convertiţi valoarea &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; într-o înregistrare ce conţine valorile pentru oră.
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
