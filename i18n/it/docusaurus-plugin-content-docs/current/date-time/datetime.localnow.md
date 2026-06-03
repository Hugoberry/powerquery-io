---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Restituisce la data e l'ora correnti nel fuso orario locale.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Restituisce un valore `datetime` impostato sulla data e sull'ora correnti di system.  
  
Il valore restituito da questa funzione dipende dal fatto che la query venga eseguita in un computer locale o online. Se ad esempio si esegue la query in un sistema situato nel fuso orario stati uniti del Pacifico, Power Query Desktop restituirà la data e l'ora impostate nel computer locale. Tuttavia, se si esegue la query sul cloud, Power Query Online restituisce l'ora UTC perché legge l'ora impostata nelle macchine virtuali cloud, tutte impostate su UTC.


## Examples

### Example #1
Richiama questa funzione in un computer locale che esegue Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Richiama questa funzione nel cloud che esegue Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
