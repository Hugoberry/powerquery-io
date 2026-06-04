---
title: List.Max
---

# List.Max


Retorna el valor màxim o el valor per defecte per a una llista buida.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Retorna l'element màxim de la llista o el valor per defecte opcional si la llista està buida.

-   `list`: llista de valors.
-   `default`: (Opcional) El valor que es retornarà si la llista està buida.
-   `comparisonCriteria`: (Opcional) Una funció que s'utilitza per transformar els valors abans que es comparin. Si aquest paràmetre és `nul`, els valors es comparen sense cap transformació.
-   `includeNulls`: (Opcional) Indica si els valors `nuls` de la llista s'han d'incloure en determinar l'element màxim. El valor per defecte és `cert`.


## Examples

### Example #1
Troba el valor màxim de la llista especificada.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Troba el valor màxim de la llista especificada o retorna -1 si està buida.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Cerca l'element en una llista de valors de text que és l'últim alfabèticament. Si la llista està buida, retorna "none".
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Troba la data més recent d'una llista de dates alemanyes. Si la llista està buida, retorna l'1 de gener de 2000.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
