---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Creează o valoare datetime de la un număr lung pe 64 de biţi.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Creează o valoare <code>datetime</code> din valoarea <code>fileTime</code> şi o converteşte în fusul orar local. Ora fişierului este ora fişierului Windows care reprezintă numărul de intervale de 100-nanosecunde care au trecut de la ora 12:00 miezul nopţii, 1 ianuarie 1601 era noastră (C.E.) Timp universal (UTC).


## Examples

### Example #1 
Convertiţi &lt;code&gt;129876402529842245&lt;/code&gt; într-o valoare datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
