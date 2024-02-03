---
title: List.Durations
---

# List.Durations


## Description

Generuje listę wartości typu duration, używając podanej wartości początkowej, liczby wartości oraz przyrostowej wartości czasu trwania.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Zwraca listę <code>count</code> z wartościami typu <code>duration</code>, rozpoczynając od wartości <code>start</code> i używając jako przyrostu danej wartości typu <code>duration</code> podanej w parametrze <code>step</code>.


## Examples

### Example #1 
Utwórz listę 5 wartości, zaczynając od 1 godziny i zwiększając wartość o godzinę.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
