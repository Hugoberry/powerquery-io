---
title: List.Max
---

# List.Max


Restituisce il valore massimo o il valore predefinito per un elenco vuoto.


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

Restituisce l'elemento massimo nella lista o il valore predefinito opzionale se la lista è vuota.

-   `list`: elenco di valori.
-   `default`: (Facoltativo) Valore da restituire se l'elenco è vuoto.
-   `comparisonCriteria`: (Facoltativo) Funzione usata per trasformare i valori prima che vengano confrontati. Se questo parametro è `null`, i valori vengono confrontati senza alcuna trasformazione.
-   `includeNulls`: (Facoltativo) Indica se i valori `null` nell'elenco devono essere inclusi nella determinazione dell'elemento massimo. Il valore predefinito è `true`.


## Examples

### Example #1
Trova il valore massimo nell'elenco specificato.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Trova il valore massimo nell'elenco specificato o restituisci -1 se è vuoto.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Trova l'elemento in un elenco di valori di testo che è l'ultimo in ordine alfabetico. Se l'elenco è vuoto, restituisci "none".
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
Trova la data più recente in un elenco di date tedesche. Se l'elenco è vuoto, restituisci il 1° gennaio 2000.
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
