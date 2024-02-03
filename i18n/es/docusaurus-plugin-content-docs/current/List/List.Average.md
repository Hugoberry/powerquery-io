---
title: List.Average
---

# List.Average


## Description

Devuelve la media de los valores. Opera con valores number, date, datetime, datetimezone y duration.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Devuelve el valor promedio de los elementos de la lista, <code>list</code>. El resultado se proporciona en el mismo tipo de datos que los valores de la lista. Solo opera con valores number, date, time, datetime, datetimezone y duration.    Si la lista está vacía, se devuelve NULL.


## Examples

### Example #1 
Busca el promedio de la lista de números &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Buscar el promedio de los valores de fecha del 1 de enero de 2011, el 2 de enero de 2011 y el 3 de enero de 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
