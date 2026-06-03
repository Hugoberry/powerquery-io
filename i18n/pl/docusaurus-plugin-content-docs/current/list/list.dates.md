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

Zwraca listę wartości typu `date` o rozmiarze `count`, rozpoczynając od wartości `start`. Podany przyrost (`step`) to wartość typu `duration` dodawana do każdej wartości.


## Examples

### Example #1
Utwórz listę 5 wartości, zaczynając od Sylwestra (#date(2011, 12, 31)) i używając przyrostu co 1 dzień (#duration(1, 0, 0, 0)).
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
