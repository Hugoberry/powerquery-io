---
title: List.LastN
---

# List.LastN


Vraća listu poslednje stavke ili stavki na navedenoj listi. Opcionalno može da navede broj vrednosti koje treba vratiti ili kvalifikujući uslov.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Vraća listu poslednje stavke ili stavki na navedenoj listi.

-   `list`: Lista za ispitivanje. Ako je lista prazna, vraća se prazna lista.
-   `countOrCondition`: (opcionalno) Podržava prikupljanje više stavki ili filtriranje stavki. Iako je ovaj parametar naveden kao opcionalan, do greške dolazi ako ova vrednost nije navedena ili je `null`. Ovaj parametar se može navesti na dva načina:
    -   Ako je naveden broj, uklanja se najviše toliko stavki.
    -   Ako je naveden uslov, vraćaju se sve stavke koje ispunjavaju uslov, počevši od kraja liste. Kada stavka ne ispuni uslov, više se ne razmatraju druge stavke.


## Examples

### Example #1
Pronalaženje poslednje vrednosti sa liste \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Pronalaženje poslednjih vrednosti sa liste \{3, 4, 5, -1, 7, 8, 2\} koje su veće od 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
