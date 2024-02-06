---
title: Time.ToRecord
---

# Time.ToRecord


Returnerer en post, der indeholder delene fra klokkeslætsværdien.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Returnerer en post, der indeholder delene fra en bestemt klokkeslætsværdi, <code>time</code>. <ul>        <li><code>time</code>: En værdi af typen <code>time</code>, som delenes post skal beregnes ud fra.</li>      </ul>


## Examples

### Example #1 
Konvertér værdien af typen &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; til en post, der indeholder klokkeslætsværdier.
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
