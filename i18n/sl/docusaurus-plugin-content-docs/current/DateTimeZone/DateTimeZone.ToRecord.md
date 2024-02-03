---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Vrne zapis, ki vsebuje dele vrednosti &#34;datetimezone&#34;.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Vrne zapis, ki vsebuje dele dane vrednosti "datetimezone", <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: vrednost <code>datetimezone</code>, iz katere bo izračunan zapis njenih delov.</li>      </ul>


## Examples

### Example #1 
Pretvorite vrednost &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; v zapis, ki vsebuje vrednosti &#34;Date&#34;, &#34;Time&#34; in &#34;Zone&#34;.
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
