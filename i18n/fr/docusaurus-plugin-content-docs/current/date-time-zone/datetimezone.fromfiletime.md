---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


Crée un datetimezone à partir d&#39;un nombre long 64 bits.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

Crée une valeur <code>datetimezone</code> à partir de la valeur <code>fileTime</code> et la convertit en fuseau horaire local. Le filetime est une valeur de date/heure de fichier Windows qui représente le nombre d'intervalles de 100 nanosecondes écoulés depuis la date UTC du 1er janvier 1601 à 00:00.    


## Examples

### Example #1 
Convertit &lt;code&gt;129876402529842245&lt;/code&gt; dans une valeur datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
