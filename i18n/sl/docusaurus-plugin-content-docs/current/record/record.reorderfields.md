---
title: Record.ReorderFields
---

# Record.ReorderFields


Preuredi polja zapisov tako, da se ujemajo z vrstnim redom seznama imen polj.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Preuredi polja zapisa tako, da se ujemajo z vrstnim redom seznama imen polj.

-   `record`: zapis, ki vsebuje polja za preurejanje.
-   `fieldOrder`: seznam, ki vsebuje nov vrstni red polj za zapis. Vrednosti polj so ohranjene, polja, ki niso navedena v tem parametru, pa so na izvirnih mestih.
-   `missingField`: določa pričakovano dejanje za manjkajoče vrednosti v vrstici, ki vsebuje manj polj, kot je bilo pričakovano. Te vrednosti so veljavne:
    -   `MissingField.Error`: (Privzeto) označuje, da morajo manjkajoča polja povzročiti napako. Če za parameter `missingField` ni vnesena nobena vrednost, je uporabljena ta vrednost.
    -   `MissingField.Ignore`: označuje, da je treba manjkajoča polja ignorirati.
    -   `MissingField.UseNull`: označuje, da morajo biti manjkajoča polja vključena kot vrednosti `null`.


## Examples

### Example #1
Prerazvrstite nekaj polj v zapisu.
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
Preuredi nekatera polja v zapisu in vključi `null` za manjkajoča polja.
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
