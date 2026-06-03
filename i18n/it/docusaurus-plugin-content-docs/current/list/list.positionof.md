---
title: List.PositionOf
---

# List.PositionOf


Restituisce gli offset di un valore in un elenco.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Restituisce l'offset al quale appare il valore specificato in un elenco. Restituisce -1 se il valore non appare.

-   `list`: l'elenco in cui cercare.
-   `value`: il valore da trovare nell'elenco.
-   `occurrence`: (opzione facoltativa) l'occorrenza specifica da segnalare. Questo valore può essere `Occurrence.First`, `Occurrence.Last` o `Occurrence.All`. Se non viene specificato alcun elemento `occurrence`, viene usato `Occurrence.First`.
-   `equationCriteria`: (opzione facoltativa) specifica come viene determinata l'uguaglianza durante il confronto dei valori. Questo parametro può essere una funzione selettore chiave, una funzione comparatore o un elenco contenente sia un selettore chiave che un comparatore.


## Examples

### Example #1
Trovare la posizione nell'elenco \{1, 2, 3\} in cui è presente il valore 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Trova la posizione nell'elenco di tutte le istanze di date del 2022.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
Trova la posizione nell'elenco dell'ultima occorrenza della parola "cane", ignorando la distinzione tra maiuscole e minuscole.
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
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
Trova la posizione nell'elenco che si trova entro due unità dal numero 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
