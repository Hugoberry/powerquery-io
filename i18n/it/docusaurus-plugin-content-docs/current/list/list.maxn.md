---
title: List.MaxN
---

# List.MaxN


Restituisce i valori massimi dell'elenco. È necessario specificare il numero di valori da restituire o una condizione di filtro.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Restituisce i valori massimi nell'elenco specificato. Dopo l'ordinamento delle righe, è possibile specificare parametri opzionali per filtrare ulteriormente il risultato.

-   `list`: l'elenco di valori.
-   `countOrCondition`: specifica il numero di valori da restituire o una condizione di filtro. Se viene specificato un numero, viene restituita un elenco di massimo `countOrCondition` elementi in ordine decrescente. Se viene specificata una condizione, la lista restituita include tutti gli elementi che soddisfano la condizione.
-   `comparisonCriteria`: (Facoltativo) Funzione usata per trasformare i valori prima che vengano confrontati. Se questo parametro è `null`, i valori vengono confrontati senza alcuna trasformazione.
-   `includeNulls`: (Facoltativo) Indica se i valori `null` nell'elenco devono essere inclusi nella determinazione dell'elemento massimo. Il valore predefinito è `true`.


## Examples

### Example #1
Trova i primi 5 valori nell'elenco specificato.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Trova le parole con più di 3 caratteri.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Trova le tre date più recenti in un elenco di date tedesche.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
