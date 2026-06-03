---
title: Table.Group
---

# Table.Group


Groepeert rijen in de tabel die dezelfde sleutel hebben.


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

Hiermee worden de rijen gegroepeerd met `table` op basis van de sleutelkolommen die zijn gedefinieerd door `key`. De `key` kan één kolomnaam of een lijst met kolomnamen zijn. Voor elke groep wordt een record gemaakt met de sleutelkolommen (en de bijbehorende waarden), samen met eventuele geaggregeerde kolommen die zijn gespecificeerd door `aggregatedColumns`. Optioneel kunnen ook `groupKind` en `comparer` worden gespecificeerd.  
  
Als de gegevens al zijn gesorteerd op de sleutelkolommen, kan een `groupKind` van GroupKind.Local worden opgegeven. Dit kan de prestaties van het groeperen in bepaalde gevallen verbeteren, aangezien alle rijen met een bepaalde set sleutelwaarden aaneengesloten worden geacht.  
  
Wanneer u een `comparer` doorgeeft, moet u er rekening mee houden dat als het verschillende sleutels als gelijk behandelt, en een rij wellicht wordt geplaatst in een groep waarvan de sleutels verschillen van hun eigen sleutels.  
  
Deze functie garandeert niet de volgorde van de geretourneerde rijen.


## Examples

### Example #1
De tabel groeperen door toevoeging van een aggregatiekolom \[total\] waarin het totaal van de prijzen (each List.Sum(\[price\])) staat.
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
