---
title: List.Union
---

# List.Union


## Description

Retorna la unió dels valors de llista que hi ha a l&#39;entrada.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Pren una llista de llistes <code>lists</code>, uneix els elements a les llistes individuals i els retorna a la llista de sortida. Com a resultat, la llista retornada conté tots els elements de qualsevol llista d'entrada.    Aquesta operació manté una semàntica de multiconjunts tradicional, de manera que duplica els valors que coincideixen com a part de la unió.    Un valor de criteris d'equació opcional, <code>equationCriteria</code>, es pot especificar per controlar la prova d'igualtat. 


## Examples

### Example #1 
Crea una unió de la llista \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
