---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Vráti funkciu porovnávača bez rozlíšenia malých a veľkých písmen, ktorá používa pravidlá poradia na porovnanie hodnôt.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Vráti funkciu porovnávača bez rozlíšenia malých a veľkých písmen, ktorá používa pravidlá poradia na porovnanie zadaných hodnôt `x` a `y`.  
  
Funkcia porovnávača akceptuje dva argumenty a vráti hodnotu -1, 0 alebo 1 na základe toho, či je prvá hodnota menšia, rovná alebo väčšia ako druhá hodnota.


## Examples

### Example #1
S použitím pravidiel poradia bez rozlíšenia malých a veľkých písmen porovnajte hodnoty "Abc" a "abc". Všimnite si, že hodnota "Abc" je menej než "abc" s použitím porovnávača `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
