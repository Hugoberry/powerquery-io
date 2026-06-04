---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Returnează data şi ora curente în fusul orar local.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Returnează o valoare `datetime` setată la data și ora curente ale sistemului.  
  
Valoarea returnată de această funcție depinde de rularea interogării pe un computer local sau online. De exemplu, dacă rulați interogarea pe un sistem localizat în fusul orar al Pacificului S.U.A., Power Query Desktop returnează data și ora setate pe computerul local. Cu toate acestea, dacă rulați interogarea în cloud, Power Query Online returnează ora UTC, deoarece citește ora setată pe mașinile virtuale din cloud, care sunt setate la UTC.


## Examples

### Example #1
Invocați această funcție pe un computer local care rulează Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Invocați această funcție în cloud care rulează Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
