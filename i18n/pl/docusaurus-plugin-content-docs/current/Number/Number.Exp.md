---
title: Number.Exp
---

# Number.Exp


## Description

Podnosi liczbę „e” do danej potęgi.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Details

Zwraca wyniki podniesienia liczby „e” do potęgi <code>number</code> (funkcja wykładnicza).      <ul>        <li><code>number</code>: Wartość typu <code>number</code>, dla której ma zostać obliczona funkcja wykładnicza. Jeśli parametr <code>number</code> ma wartość null, funkcja <code>Number.Exp</code> zwraca wartość null. </li>      </ul>


## Examples

### Example #1 
Podnieś liczbę „e” do potęgi 3.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
