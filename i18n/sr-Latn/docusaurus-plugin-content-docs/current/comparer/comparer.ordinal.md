---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Vraća funkciju upoređivača koja koristi pravila rednih brojeva za poređenje vrednosti.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Vraća funkciju poređenja koja koristi redna pravila za poređenje navedenih vrednosti `x` i `y`.  
  
Funkcija poređenja prihvata dva argumenta i vraća -1, 0 ili 1 na osnovu toga da li je prva vrednost manja od, jednaka ili veća od druge.


## Examples

### Example #1
Pomoću pravila rednih brojeva uporedite da li su stavke „encyclopædia“ i „encyclopaedia“ iste. Obratite pažnju na to da su ove stavke iste ako se koristi funkcija `Comparer.FromCulture("sr-Latn-RS")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
