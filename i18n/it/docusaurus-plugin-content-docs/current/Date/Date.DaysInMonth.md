---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Restituisce un numero compreso tra 28 e 31 che indica il numero dei giorni del mese.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Restituisce il numero di giorni del mese nel valore <code>dateTime</code> di <code>date</code>, <code>datetime</code> o <code>datetimezone</code>. <ul>        <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> per cui viene restituito il numero di giorni del mese.</li>      </ul>


## Examples

### Example #1 
Numero di giorni del mese di dicembre come rappresentato da &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
