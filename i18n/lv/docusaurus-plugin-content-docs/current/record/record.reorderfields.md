---
title: Record.ReorderFields
---

# Record.ReorderFields


Pārkārto ieraksta laukus, lai tie atbilstu lauku nosaukumu saraksta secībai.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Pārkārto ieraksta laukus, lai tie atbilst lauku nosaukumu saraksta secībai.

-   `record`: Ieraksts, kurā ir pārkārtojami lauki.
-   `fieldOrder`: Saraksts ar jauno lauku secību, kas jālieto ierakstam. Lauku vērtības tiek saglabātas, un laukiem, kas nav uzskaitīti šajā parametrā, tiek atstātas sākotnējās pozīcijas.
-   `missingField`: Norāda paredzēto darbību trūkstošām vērtībām rindā, kurā lauku skaits ir mazāks par paredzēto. Šīs vērtības ir derīgas:
    -   `MissingField.Error`: (Noklusējums) Norāda, ka trūkstošo lauku dēļ ir jābūt kļūdai. Ja parametram `missingField` nav ievadīta vērtība, šī vērtība tiek izmantota.
    -   `MissingField.Ignore`: Norāda, ka trūkstošie lauki ir jāignorē.
    -   `MissingField.UseNull`: Norāda, ka trūkstošie lauki jāiekļauj kā `null` vērtības.


## Examples

### Example #1
Pārkārtojiet dažus ieraksta laukus.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Pārkārtojiet dažus ieraksta laukus un iekļaujiet `null` trūkstošajiem laukiem.
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
