---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Crée un datetime à partir d&#39;un nombre long 64 bits.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Crée une valeur <code>datetime</code> à partir de la valeur <code>fileTime</code> et la convertit en fuseau horaire local. Le filetime est une valeur d'heure de fichier Windows qui représente le nombre d'intervalles de 100 nanosecondes écoulés depuis 00:00 le 1er janvier 1601. (calendrier julien) Temps universel coordonné (UTC).


## Examples

### Example #1 
Convertit &lt;code&gt;129876402529842245&lt;/code&gt; dans une valeur datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
