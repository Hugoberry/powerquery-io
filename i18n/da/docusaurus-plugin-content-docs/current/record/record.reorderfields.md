---
title: Record.ReorderFields
---

# Record.ReorderFields


Omarrangerer postfelterne, så de svarer til rækkefølgen af en liste over feltnavne.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Omarrangerer felterne i en post, så de svarer til rækkefølgen af en liste over feltnavne.

-   `record`: Den post, der indeholder de felter, der skal omarrangeres.
-   `fieldOrder`: En liste, der indeholder den nye rækkefølge af de felter, der skal anvendes på posten. Feltværdier vedligeholdes, og felter, der ikke er angivet i denne parameter, efterlades på deres oprindelige placeringer.
-   `missingField`: Angiver den forventede handling for manglende værdier i en række, der indeholder færre felter end forventet. Følgende værdier er gyldige:
    -   `MissingField.Error`: (Standard) Angiver, at manglende felter skal resultere i en fejl. Hvis der ikke er angivet en værdi for parameteren `missingField`, bruges denne værdi.
    -   `MissingField.Ignore`: Angiver, at manglende felter skal ignoreres.
    -   `MissingField.UseNull`: Angiver, at manglende felter skal inkluderes som `null` værdier.


## Examples

### Example #1
Omarranger nogle af felterne i posten.
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
Omarranger nogle af felterne i posten, og inkluder `null` for manglende felter.
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
