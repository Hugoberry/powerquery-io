---
title: List.Generate
---

# List.Generate


## Description

Opretter en liste over værdier.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Opretter en liste over værdier ved hjælp af de angivne funktioner. Funktionen <code>initial</code> genererer en start kandidatværdi, som derefter testes mod <code>condition</code>.    Hvis kandidatværdien godkendes, returneres den som en del af resultatlisten, og den næste kandidatværdi genereres ved at overføre den nyligt godkendte værdi til <code>next</code>.    Når en kandidatværdi ikke matcher <code>condition</code>, stopper oprettelsesprocessen for listen.    Der kan også angives en valgfri parameter, <code>selector</code>, for at transformere elementerne på resultatlisten.


## Examples

### Example #1 
Opret en liste ved at starte ved ti og gentagne gange trække én fra og sikre, at hvert element er større end nul.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Opret en liste over poster, der indeholder x og y, hvor x er en værdi, og y er en liste. x skal være mindre end 10 og repræsentere antallet af elementer på liste y. Når listen er oprettet, skal der kun returneres x-værdier.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
