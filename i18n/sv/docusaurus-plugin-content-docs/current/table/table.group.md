---
title: Table.Group
---

# Table.Group


Grupperar rader i tabellen som har samma nyckel.


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

Grupperar raderna med `table` efter nyckelkolumnerna som definieras av `key`. `key` kan antingen vara ett enskilt kolumnnamn eller en lista över kolumnnamn. För varje grupp skapas en post som innehåller nyckelkolumnerna (och deras värden) tillsammans med alla sammanställda kolumner som anges av `aggregatedColumns`. Du kan också ange `groupKind` och `comparer`.  
  
Om data redan är sorterade efter nyckelkolumnerna kan en `groupKind` av GroupKind. local tillhandahållas. Detta kan förbättra gruppens prestanda i vissa fall, eftersom alla rader med en viss uppsättning nyckelvärden antas vara sammanhängande.  
  
När du skickar ett`comparer`, tänk på att om det behandlar olika nycklar som likvärdiga kan en rad placeras i en grupp vars nycklar skiljer sig från varandra.  
  
Den här funktionen garanterar inte ordningen för de rader som returneras.


## Examples

### Example #1
Gruppera tabellen och lägg till en aggregeringskolumn \[total\] som innehåller summan av priserna ("each List.Sum(\[price\])").
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
