---
title: List.Buffer
---

# List.Buffer


Memorizza nel buffer un elenco.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

Memorizza l'elenco <code>list</code> in memoria. Il risultato della chiamata è un elenco stabile.


## Examples

### Example #1 
Creare una copia stabile dell&#39;elenco \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
