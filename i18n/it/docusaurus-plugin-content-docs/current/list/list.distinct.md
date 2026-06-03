---
title: List.Distinct
---

# List.Distinct


Restituisce l'elenco dei valori con i duplicati rimossi.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Restituisce un elenco che contiene tutti i valori nell'elenco specificato con i duplicati rimossi. Se l'elenco specificato è vuoto, il risultato è un elenco vuoto.

-   `list`: l'elenco da cui vengono estratti i diversi valori.
-   `equationCriteria`: (Facoltativo) specifica come viene determinata l'uguaglianza durante il confronto dei valori. Questo parametro può essere una funzione del selettore chiave, una funzione dell'operatore di confronto o un elenco contenente sia un selettore chiave che un operatore di confronto.


## Examples

### Example #1
Rimuovere i duplicati dall'elenco \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
A partire dalla fine dell'elenco, selezionare i frutti che hanno una lunghezza di testo univoca.
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
A partire dall'inizio dell'elenco, selezionare i frutti univoci ignorando le maiuscole/minuscole.
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
Estrarre da un elenco di elenchi i primi elenchi con nomi di paesi univoci ignorando le maiuscole/minuscole. Inserire gli elenchi estratti nelle righe di una nuova tabella.
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
