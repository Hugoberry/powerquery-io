---
title: List.MaxN
---

# List.MaxN


Vrátí maximální hodnotu (hodnoty) v seznamu. Je třeba zadat počet hodnot, které se mají vrátit, nebo podmínku filtru.


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

Vrátí maximální hodnoty v zadaném seznamu. Po seřazení řádků je možné zadat volitelné parametry pro další filtrování výsledku.

-   `list`: Seznam hodnot
-   `countOrCondition`: Určuje počet hodnot, které se mají vrátit, nebo podmínku filtru. Pokud je zadáno číslo, vrátí se seznam až `countOrCondition` položek v sestupném pořadí. Pokud je zadána podmínka, vrácený seznam obsahuje všechny položky, které podmínku splňují.
-   `comparisonCriteria`: (Volitelné) Funkce, která se používá k transformaci hodnot před jejich porovnáním. Pokud je tento parametr `null`, hodnoty se porovnávají bez jakékoli transformace.
-   `includeNulls`: (Nepovinné) Určuje, zda mají být do určení maximální položky zahrnuty hodnoty `null` v seznamu. Výchozí hodnota je `true`.


## Examples

### Example #1
Najít prvních 5 hodnot v zadaném seznamu
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Najít slova s více než 3 znaky
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
Najít tři nejnovější data ze seznamu německých kalendářních dat.
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
