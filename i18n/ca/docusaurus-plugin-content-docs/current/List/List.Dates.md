---
title: List.Dates
---

# List.Dates


## Description

Genera una llista de valors de data a partir d&#39;un valor inicial, d&#39;un recompte i d&#39;un valor de durada incremental.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Retorna una llista de valors <code>date</code> de mida <code>count</code>, que comença per <code>start</code>. L'increment donat, <code>step</code>, és un valor <code>duration</code> que se suma a tots els valors.


## Examples

### Example #1 
Crea una llista de 5 valors que comencen amb la nit de cap d&#39;any (#date(2011, 12, 31)) i amb increments d&#39;1 dia(#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
