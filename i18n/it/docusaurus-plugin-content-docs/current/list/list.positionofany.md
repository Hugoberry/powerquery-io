---
title: List.PositionOfAny
---

# List.PositionOfAny


Restituisce il primo offset di un valore in un elenco.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Restituisce l'offset al quale un elemento dell'elenco di valori specificato appare in un elenco. Restituisce -1 se non viene trovata alcuna occorrenza.

-   `list`: l'elenco in cui cercare.
-   `values`: elenco di valori da trovare nell'elenco originale.
-   `occurrence`: (opzione facoltativa) l'occorrenza specifica da segnalare. Questo valore può essere `Occurrence.First`, `Occurrence.Last` o `Occurrence.All`. Se non viene specificato alcun elemento `occurrence`, viene usato `Occurrence.First`.
-   `equationCriteria`: (opzione facoltativa) specifica come viene determinata l'uguaglianza durante il confronto dei valori. Questo parametro può essere una funzione selettore chiave, una funzione comparatore o un elenco contenente sia un selettore chiave che un comparatore.


## Examples

### Example #1
Trovare la prima posizione nell'elenco \{1, 2, 3\} in cui sono presenti i valori 2 o 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Trova la posizione nell'elenco di tutte le istanze di date del 2022 o del 2023.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
Trova la posizione nell'elenco dell'ultima occorrenza della parola "cane" o "gatto", ignorando la distinzione tra maiuscole e minuscole.
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
Trova qualsiasi posizione nell'elenco che sia compresa entro due unità dal numero 17 o 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
