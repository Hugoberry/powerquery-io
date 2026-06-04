---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Vrne funkcijo primerjalnika, ki ne razlikuje med velikimi ter malimi črkami in ki za primerjavo vrednosti uporablja pravila vrstilnih števnikov.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Vrne funkcijo primerjalnika, ki ne razlikuje med velikimi in malimi črkami, in ki uporablja pravila vrstilnega števnika za primerjavo podanih vrednosti `x` in `y`.  
  
Funkcija primerjalnika sprejme dva argumenta in vrne –1, 0 ali 1 glede na to, ali je prva vrednost manjša od, enaka, ali večje od druge.


## Examples

### Example #1
S pravili vrstilnih števnikov, ki ne razlikujejo med velikimi in malimi črkami, primerjajte"Abc"z"abc". Upoštevajte, da je"Abc"manjše kot"abc", če uporabljate primerjalnik `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
