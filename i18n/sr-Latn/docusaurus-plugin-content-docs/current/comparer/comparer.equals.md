---
title: Comparer.Equals
---

# Comparer.Equals


Vraća logičku vrednost na osnovu provere jednakosti za dve date vrednosti.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Vraća `logical` vrednost na osnovu provere jednakosti dve date vrednosti, `x` i `y`, koristeći navedeni `comparer`.

`comparer` je `Comparer` koji se koristi za kontrolisanje poređenja. Upoređivač je funkcija koja prihvata dva argumenta i vraća -1, 0 ili 1 na osnovu toga da li je prva vrednost manja od, jednaka ili veća od sekunde. Upoređivači mogu da se koriste za pružanje poređenja koja ne razlikuju mala i velika slova ili za poređenja kulture i lokalnog standarda.

Sledeći ugrađeni upoređivači dostupni su na jeziku formule:

-   `Comparer.Ordinal`: Koristi se za izvršavanje tačnog rednog poređenja
-   `Comparer.OrdinalIgnoreCase`: Koristi se za izvršavanje tačnog poređenja koje ne razlikuje mala i velika slova
-   `Comparer.FromCulture`\>: Koristi se za izvršavanje poređenja usklađeno sa kulturom


## Examples

### Example #1
Uporedite stavke „1“ i „A“ pomoću lokalnog standarda „en-US“ da biste odredili da li su vrednosti jednake.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
