---
title: List.DateTimes
---

# List.DateTimes


Generuje listę wartości typu datetime, używając podanej wartości początkowej, liczby wartości oraz przyrostowej wartości czasu trwania.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Remarks

Zwraca listę wartości typu <code>datetime</code> o rozmiarze <code>count</code>, rozpoczynając od wartości <code>start</code>. Podany przyrost (<code>step</code>) to wartość typu <code>duration</code> dodawana do każdej wartości.


## Examples

### Example #1 
Utwórz listę 10 wartości, zaczynając od 5 minut przed Nowym Rokiem (#datetime(2011, 12, 31, 23, 55, 0)) i używając przyrostu o wartości 1 minuty (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
