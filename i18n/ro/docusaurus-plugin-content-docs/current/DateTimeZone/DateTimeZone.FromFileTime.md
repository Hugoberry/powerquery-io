---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Creează o valoare datetimezone dintr-un număr lung pe 64 de biţi.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Creează o valoare <code>datetimezone</code> din valoarea <code>fileTime</code> și o convertește în fusul orar local. Ora fișierului este ora fișierului Windows care reprezintă numărul de intervale de 100-nanosecunde care au trecut de la ora 12:00 miezul nopții, 1 ianuarie, 1601 era noastră. (C.E.) Timp universal (UTC).    


## Examples

### Example #1 
Convertiţi &lt;code&gt;129876402529842245&lt;/code&gt; într-o valoare datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
