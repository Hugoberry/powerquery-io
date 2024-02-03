---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Crea un elemento datetime da un numero lungo 64 bit.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Crea un valore <code>datetime</code> dal valore <code>fileTime</code> e lo converte nel fuso orario locale. L'elemento filetime è un valore di ora di file di Windows che rappresenta il numero di intervalli di 100 nanosecondi che sono trascorsi dalla mezzanotte 24.00 del 1° gennaio 1601 A.D. (C.E.) UTC (Coordinated Universal Time).


## Examples

### Example #1 
Converte &lt;code&gt;129876402529842245&lt;/code&gt; in un valore datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
