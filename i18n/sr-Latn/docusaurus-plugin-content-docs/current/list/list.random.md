---
title: List.Random
---

# List.Random


Vraća listu nasumičnih brojeva.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Vraća listu nasumičnih brojeva između 0 i 1, na osnovu broja vrednosti koje treba generisati i opcionalne početne vrednosti.

-   `count`: Broj nasumičnih vrednosti koje treba generisati.
-   `seed`: *(opcionalno)* Numerička vrednost koja se koristi za dodavanje generatora nasumičnih brojeva. Ako se izostavi, svaki put kada pozovete funkciju generiše se jedinstvena lista nasumičnih brojeva. Ako uz broj navedete početnu vrednost, svaki poziv funkcije generiše istu listu nasumičnih brojeva.


## Examples

### Example #1
Kreiranje liste 3 nasumična broja.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2
Kreiranje liste 3 nasumična broja, uz navođenje početne vrednosti.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
