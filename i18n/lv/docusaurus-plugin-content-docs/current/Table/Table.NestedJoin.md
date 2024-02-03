---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

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


## Details

Savieno rindas no <code>table1</code> ar rindām no <code>table2</code>, ņemot vērā pēc vērtības <code>key1</code> (vērtībai <code>table1</code>) un <code>key2</code> (vērtībai <code>table2</code>) atlasīto atslēgas kolonnu vērtību vienlīdzību. Rezultāti tiek ievadīti kolonnā ar nosaukumu <code>newColumnName</code>.<br />Neobligātā vērtība <code>joinKind</code> norāda izveidojamā savienojuma veidu. Pēc noklusējuma kreisais ārējais savienojums tiek izveidots, ja vērtība <code>joinKind</code> nav norādīta.<br />Var tikt iekļauta papildu <code>keyEqualityComparers</code> kopa, lai norādītu, kā ir jāveic atslēgas kolonnu salīdzināšana. Šobrīd šis līdzeklis ir paredzēts tikai iekšējai lietošanai.<br />  


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
