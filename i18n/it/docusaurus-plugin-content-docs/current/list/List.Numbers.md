---
title: List.Numbers
---

# List.Numbers


Restituisce un elenco di numeri corrispondenti a un valore iniziale, un conteggio e un valore incrementale facoltativo.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Restituisce un elenco di numeri corrispondenti a un valore iniziale, un conteggio e un valore incrementale facoltativo. Il valore incrementale predefinito è 1.<ul>   <li><code>start</code>: il valore iniziale dell'elenco.</li>   <li><code>count</code>: il numero di valori da creare.</li>   <li><code>increment</code>: <i>[Facoltativo]</i> il valore incrementale da utilizzare. Se omesso, i valori vengono incrementati di 1.</li></ul>


## Examples

### Example #1 
Generare un elenco di 10 numeri consecutivi partendo da 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
Generare un elenco di 10 numeri partendo da 1, con incremento di 2 per ogni numero successivo.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
