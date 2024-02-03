---
title: List.Times
---

# List.Times


## Description

Generuje listę wartości typu time, używając podanej wartości początkowej, liczby wartości oraz przyrostowej wartości czasu trwania.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Zwraca listę wartości typu <code>time</code> o rozmiarze <code>count</code>, rozpoczynając od wartości <code>start</code>. Podany przyrost (<code>step</code>) to wartość typu <code>duration</code> dodawana do każdej wartości.


## Examples

### Example #1 
Utwórz listę 4 wartości, zaczynając od południa (#time(12, 0, 0)) i używając przyrostu o wartości 1 godzina (#duration(0, 1, 0, 0)).
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
