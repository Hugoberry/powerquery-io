---
title: Number.Power
---

# Number.Power


## Description

Podnosi liczbę do danej potęgi.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Zwraca wyniki podniesienia liczby <code>number</code> do potęgi <code>power</code>.    Jeśli liczba <code>number</code> lub <code>power</code> jest równa null, funkcja <code>Number.Power</code> zwraca wartość null.      <ul>        <li><code>number</code>: Podstawa.</li>        <li><code>power</code>: Wykładnik.</li>      </ul>


## Examples

### Example #1 
Znajdź wynik podniesienia liczby 5 do potęgi 3 (5 do sześcianu).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
