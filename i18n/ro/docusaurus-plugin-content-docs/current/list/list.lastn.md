---
title: List.LastN
---

# List.LastN


Returnează o listă cu ultimul element sau ultimele elemente din lista specificată. Opțional, puteți specifica numărul de valori de returnat sau o condiție de calificare.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Returnează o listă cu ultimul element sau ultimele elemente din lista specificată.

-   `list`: lista de examinat. Dacă lista este goală, se returnează o listă goală.
-   `countOrCondition`: (opțional) Permite colectarea mai multor elemente sau filtrarea elementelor. Deși acest parametru este listat ca opțional, apare o eroare dacă această valoare nu este furnizată sau este `null`. Acest parametru poate fi specificat în două moduri:
    -   Dacă este specificat un număr, sunt returnate până la acel număr de elemente.
    -   Dacă se specifică o condiție, sunt returnate toate elementele care îndeplinesc condiția, începând de la sfârșitul listei. După ce un element nu reușește condiția, nu mai sunt luate în considerare alte elemente.


## Examples

### Example #1
Aflaţi ultima valoare din lista \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Găsiţi ultimele valori din lista \{3, 4, 5, -1, 7, 8, 2\} care sunt mai mari decât 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
