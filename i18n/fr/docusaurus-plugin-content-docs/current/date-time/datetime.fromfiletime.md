---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Crée un datetime à partir d'un nombre long 64 bits.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Crée une valeur `datetime` à partir de la valeur `fileTime` et la convertit en fuseau horaire local. Le filetime est une valeur d'heure de fichier Windows qui représente le nombre d'intervalles de 100 nanosecondes écoulés depuis 00:00 le 1er janvier 1601. (calendrier julien) Temps universel coordonné (UTC).


## Examples

### Example #1
Convertit `129876402529842245` dans une valeur datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
