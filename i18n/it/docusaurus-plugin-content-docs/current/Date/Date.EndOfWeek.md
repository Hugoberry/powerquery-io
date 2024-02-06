---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Restituisce la fine della settimana.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Restituisce la fine della settimana contenente  <code>dateTime</code>.Questa funzione accetta un valore facoltativo per <code>Day</code>, <code>firstDayOfWeek</code>, da impostare come primo giorno della settimana per il relativo calcolo. Il valore predefinito è <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da cui viene calcolato l'ultimo giorno della settimana.</li>        <li><code>firstDayOfWeek</code>: <i>[facoltativo]</i> valore <code>Day.Type</code> che rappresenta il primo giorno della settimana. I valori possibili sono <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> e <code>Day.Saturday.</code>. Il valore predefinito è <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Ottenere la fine della settimana per 14/5/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Ottenere la fine della settimana per il 17/5/2011 05.00.00 -7.00, con domenica come primo giorno della settimana.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
