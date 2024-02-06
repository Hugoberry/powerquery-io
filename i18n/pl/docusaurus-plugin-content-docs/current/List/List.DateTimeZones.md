---
title: List.DateTimeZones
---

# List.DateTimeZones


Generuje listę wartości typu datetimezone, używając podanej wartości początkowej, liczby wartości oraz przyrostowej wartości czasu trwania.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Remarks

Zwraca listę wartości typu <code>datetimezone</code> o rozmiarze <code>count</code>, rozpoczynając od wartości <code>start</code>. Podany przyrost (<code>step</code>) to wartość typu <code>duration</code> dodawana do każdej wartości.


## Examples

### Example #1 
Utwórz listę 10 wartości, zaczynając od 5 minut przed Nowym Rokiem (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) i używając przyrostu o wartości 1 minuty (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
