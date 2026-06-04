---
title: Table.NestedJoin
---

# Table.NestedJoin


Tiek veikta tabulu savienošana pēc norādītajām kolonnām, un savienošanas rezultāts tiek ietverts jaunā kolonnā.


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

Savieno rindas no `table1` ar rindām no `table2`, ņemot vērā pēc vērtības `key1` (vērtībai `table1`) un `key2` (vērtībai `table2`) atlasīto atslēgas kolonnu vērtību vienlīdzību. Rezultāti tiek ievadīti kolonnā ar nosaukumu `newColumnName`.

Neobligātā vērtība `joinKind` norāda izveidojamā savienojuma veidu. Pēc noklusējuma kreisais ārējais savienojums tiek izveidots, ja vērtība `joinKind` nav norādīta.

Var tikt iekļauta papildu `keyEqualityComparers` kopa, lai norādītu, kā ir jāveic atslēgas kolonnu salīdzināšana. Šobrīd šis līdzeklis ir paredzēts tikai iekšējai lietošanai.


## Examples

### Example #1
Apvienojiet divas tabulas, izmantojot vienu galveno kolonnu.
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
