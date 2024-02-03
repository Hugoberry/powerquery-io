---
title: List.Average
---

# List.Average


## Description

Restituisce la media dei valori. Si utilizza con valori number, date, datetime, datetimezone e duration.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Restituisce il valore medio degli elementi dell'elenco <code>list</code>. Risultato viene restituito nello stesso tipo di dati dei valori dell'elenco. Si utilizza solo con valori number, date, time, datetime, datetimezone e duration.    Se l'elenco è vuoto viene restituito Null.


## Examples

### Example #1 
Trovare la media dell&#39;elenco di numeri &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Trovare la media dei valori di data 1° gennaio 2011, 2 gennaio 2011 e 3 gennaio 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
