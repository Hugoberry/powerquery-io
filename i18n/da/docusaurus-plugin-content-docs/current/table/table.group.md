---
title: Table.Group
---

# Table.Group


Grupperer rækker i tabellen, der indeholder samme nøgle.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Grupperer rækkerne i `table` efter de nøglekolonner, der er defineret af `key`. `key` kan enten være et enkelt kolonnenavn eller en liste af kolonnenavne. For hver gruppe oprettes en post, der indeholder nøglekolonnerne (og deres værdier) sammen med de aggregerede kolonner, som er angivet af `aggregatedColumns`. Valgfrit kan angives `groupKind` og `comparer`.  
  
Hvis data allerede er sorteret efter nøglekolonnerne, kan der angives en `groupKind` af GroupKind. Lokal kan angives. Dette kan forbedre ydeevne ved gruppering i visse tilfælde, eftersom alle rækker med et bestemt sæt nøgleværdier antages at være sammenhængende.  
  
Ved overførsel af en `comparer`, skal du være opmærksom på, at en række kan placeres i en gruppe, hvis nøgler er anderledes end dens egne.  
  
Denne funktion garanterer ikke rækkefølgen af de rækker, den returnerer.


## Examples

### Example #1
Gruppér tabellen ved at tilføje en aggregeringskolonne \[total\], som indeholder summen af priser ("each List.Sum(\[price\])").
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
