---
title: List.Times
---

# List.Times


## Description

Genera una llista de valors horaris a partir d&#39;un valor inicial, d&#39;un recompte i d&#39;un valor de durada incremental.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Retorna una llista de valors <code>time</code> de mida <code>count</code>, que comença per <code>start</code>. L'increment donat, <code>step</code>, és un valor <code>duration</code> que se suma a tots els valors.


## Examples

### Example #1 
Crea una llista de 4 valors que comencen a partir del migdia (#time(12, 0, 0)) i s&#39;incrementen en una hora (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
