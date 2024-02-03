---
title: List.DateTimes
---

# List.DateTimes


## Description

Genera una llista de valors d&#39;hora i de data a partir d&#39;un valor inicial, d&#39;un recompte i d&#39;un valor de durada incremental.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Retorna una llista de valors <code>datetime</code> de mida <code>count</code>, que comença per <code>start</code>. L'increment donat, <code>step</code>, és un valor <code>duration</code> que se suma a tots els valors.


## Examples

### Example #1 
Crea una llista de 10 valors que comencen des de 5 minuts abans del primer dia de l&#39;any (#datetime(2011, 12, 31, 23, 55, 0)) i s&#39;incrementen en 1 minut (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
