---
title: List.Random
---

# List.Random


## Description

Restituisce un elenco di numeri casuali.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Restituisce un elenco di numeri casuali compresi tra 0 e 1 corrispondenti al numero di valori da generare e un valore di inizializzazione facoltativo.<ul>   <li><code>count</code>: numero di valori causali da generare.</li>   <li><code>seed</code>: <i>[Facoltativo]</i> valore numerico usato per inizializzare il generatore di numeri casuali. Se omesso, viene generato un elenco univoco di numeri casuali ogni volta che si chiama la funzione. Se si specifica il valore di inizializzazione con un numero, ogni chiamata alla funzione genera lo stesso elenco di numeri casuali.</li></ul>


## Examples

### Example #1 
Creare un elenco di 3 numeri casuali.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Creare un elenco di 3 numeri casuali, specificando il valore di inizializzazione.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
