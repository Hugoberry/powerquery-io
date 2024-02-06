---
title: List.Dates
---

# List.Dates


Generuje listę wartości typu date, używając podanej wartości początkowej, liczby wartości oraz przyrostowej wartości czasu trwania.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Zwraca listę wartości typu <code>date</code> o rozmiarze <code>count</code>, rozpoczynając od wartości <code>start</code>. Podany przyrost (<code>step</code>) to wartość typu <code>duration</code> dodawana do każdej wartości.


## Examples

### Example #1 
Utwórz listę 5 wartości, zaczynając od Sylwestra (#date(2011, 12, 31)) i używając przyrostu o wartości 1 dzień (#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
