---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Restituisce un numero da 1 a 54 che indica la settimana dell&#39;anno in cui cade questa data.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Restituisce un numero da 1 a 54 che indica la settimana dell'anno in cui cade la data <code>dateTime</code>. <ul>        <li><code>dateTime</code>: valore <code>datetime</code> per cui viene determinata la settimana dell'anno.</li>        <li><code>firstDayOfWeek</code>: valore <code>Day.Type</code> facoltativo che indica quale giorno viene considerato come inizio di una nuova settimana, ad esempio <code>Day.Sunday</code>. Se non è specificato, viene usato un valore predefinito dipendente dalle impostazioni cultura.</li>      </ul>


## Examples

### Example #1 
Determinare quale settimana dell&#39;anno contiene il 27 marzo 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Determinare in quale settimana dell&#39;anno contiene il 27 marzo 2011, usando il lunedì come inizio di una settimana.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
