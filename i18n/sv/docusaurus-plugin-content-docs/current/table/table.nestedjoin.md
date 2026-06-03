---
title: Table.NestedJoin
---

# Table.NestedJoin


Skapar en koppling mellan tabeller för angivna kolumner och genererar kopplingsresultatet i en ny kolumn.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Kopplar samman raderna i `table1` med raderna i `table2` baserat på likheten av värdena i de nyckelkolumner som valts av `key1` (för `table1`) och `key2` (för `table2`). Resultaten anges i kolumnen med namnet `newColumnName`.

Det valfria `joinKind` anger typ av koppling som ska utföras. Som standard utförs en vänster yttre koppling om en `joinKind` inte anges.

En valfri uppsättning av `keyEqualityComparers` kan läggas till för att ange hur nyckelkolumnerna ska jämföras. Funktionen är för närvarande endast avsedd för internt bruk.


## Examples

### Example #1
Koppla två tabeller med en enda nyckelkolumn.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
