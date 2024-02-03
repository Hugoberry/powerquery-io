---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Tiek atgriezts ieraksts, kas ietver Time vērtības daļas.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Atgriež ierakstu, kas ietver norādītās Time vērtības <code>time</code> daļas. <ul>        <li><code>time</code>: <code>time</code> vērtība, no kuras tiek aprēķināts tās daļu ieraksts.</li>      </ul>


## Examples

### Example #1 
Pārvērtiet &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; vērtību par ierakstu, kas ietver Time vērtības.
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
