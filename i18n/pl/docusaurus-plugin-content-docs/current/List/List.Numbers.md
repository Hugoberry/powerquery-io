---
title: List.Numbers
---

# List.Numbers


## Description

Zwraca listę liczb, używając wartości początkowej, liczności oraz opcjonalnej wartości przyrostu.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Zwraca listę liczb, używając wartości początkowej, liczności oraz opcjonalnej wartości przyrostu. Domyślna wartość przyrostu to 1.<ul>   <li><code>start</code>: Wartość początkowa listy.</li>   <li><code>count</code>: Liczba wartości do utworzenia.</li>   <li><code>increment</code>: <i>[Parametr opcjonalny]</i> Wartość przyrostu. Jeśli ten parametr zostanie pominięty, wartości będą zwiększane o 1.</li></ul>


## Examples

### Example #1 
Wygeneruj listę 10 kolejnych liczb, zaczynając od 1.
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
Wygeneruj listę 10 kolejnych liczb, zaczynając od 1 i zwiększając każdą kolejną liczbę o 2.
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
