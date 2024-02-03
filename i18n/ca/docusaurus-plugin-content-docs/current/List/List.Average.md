---
title: List.Average
---

# List.Average


## Description

Retorna la mitjana dels valors. Funciona amb el valors number, date, datetime, datetimezone i duration.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Retorna la el valor mitjà dels elements de la llista, <code>list</code>. El resultat es proporciona en el mateix tipus de dades que els valors de la llista. Només funciona amb els valors number, date, time, datetime, datetimezone i duration.    Si la llista és buida, es retorna el valor nul.


## Examples

### Example #1 
Troba la mitjana de la llista de nombres, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Troba la mitjana dels valors date 1 de gener de 2011, 2 de gener de 2011 i 3 de gener de 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
