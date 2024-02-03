---
title: List.Generate
---

# List.Generate


## Description

Generează o listă de valori.


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

Generează o listă de valori utilizând funcțiile furnizate. Funcția <code>initial</code> generează o valoare candidat de pornire, care este apoi testată cu <code>condition</code>.    Dacă valoarea candidat este aprobată, este returnată ca parte a listei rezultate, iar următoarea valoare candidată este generată prin trecerea noii valori aprobate la <code>next</code>.    Odată ce o valoare candidat nu reușește să se potrivească cu <code>condition</code>, procesul de generare a listei se oprește.    Un parametru opțional, <code>selector</code>, poate fi furnizat, de asemenea, pentru a transforma elementele din lista rezultată.


## Examples

### Example #1 
Creați o listă începând de la zece, scăzând în mod repetat cu unu și asigurându-vă că fiecare element este mai mare decât zero.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Generaţi o listă de înregistrări ce conţin x şi y, unde x este o valoare şi y este o listă. x trebuie să rămână mai mic decât 10 şi reprezintă numărul de elemente din lista y. După generarea listei, returnaţi numai valorile x.
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
