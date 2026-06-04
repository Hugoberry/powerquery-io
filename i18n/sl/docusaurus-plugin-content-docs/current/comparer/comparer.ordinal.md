---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Vrne funkcijo primerjalnika, ki za primerjavo vrednosti uporablja pravila vrstilnih števnikov.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Vrne funkcijo primerjalnika, ki ne razlikuje med velikimi in malimi črkami, in ki uporablja pravila vrstilnega števnika za primerjavo podanih vrednosti `x` in `y`.  
  
Funkcija primerjalnika sprejme dva argumenta in vrne –1, 0 ali 1 glede na to, ali je prva vrednost manjša od, enaka, ali večje od druge.


## Examples

### Example #1
S pravili vrstilnih števnikov primerjajte, ali sta izraza"encyclopædia"in"encyclopaedia"enaka. Gre za ekvivalenta, ki uporabljata `Comparer.FromCulture("en-us")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
