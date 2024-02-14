---
title: List.Times
---

# List.Times


Genera un elenco di valori time specificato un valore iniziale, un conteggio e un valore incrementale di durata.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Restituisce un elenco di valori <code>time</code> di dimensione <code>count</code>, a partire da <code>start</code>. L'incremento specificato <code>step</code> è un valore <code>duration</code> che viene aggiunto a ogni valore.


## Examples

### Example #1 
Creare un elenco di 4 valori a partire da mezzogiorno (#time(12, 0, 0)) con incrementi di un&#39;ora (#duration(0, 1, 0, 0)).
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
