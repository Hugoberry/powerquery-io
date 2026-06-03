---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Retourne la date et l'heure actuelles dans le fuseau horaire local.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Retourne une valeur `datetime` définie sur la date et l’heure actuelles du système.  
  
La valeur retournée par cette fonction dépend de l’exécution ou non de votre requête sur un ordinateur local ou en ligne. Par exemple, si vous exécutez votre requête sur un système situé dans le fuseau horaire du Pacifique des États-Unis, Power Query Desktop retourne la date et l’heure définies sur votre ordinateur local. Toutefois, si vous exécutez votre requête sur le cloud, Power Query Online retourne l’heure UTC, car elle lit l’heure définie sur les machines virtuelles du cloud, lesquelles sont toutes définies sur UTC.


## Examples

### Example #1
Appeler cette fonction sur un ordinateur local exécutant Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Appeler cette fonction sur le cloud exécutant Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
