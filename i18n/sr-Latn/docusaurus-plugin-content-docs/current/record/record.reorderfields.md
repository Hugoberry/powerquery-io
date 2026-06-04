---
title: Record.ReorderFields
---

# Record.ReorderFields


Menja redosled polja zapisa tako da se podudaraju s redosledom liste imena polja.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Menja redosled polja unutar zapisa tako da se podudaraju s redosledom liste imena polja.

-   `record`: Zapis koji sadrži polja čiji redosled je potrebno promeniti.
-   `fieldOrder`: Lista koja sadrži novi redosled polja koji je potrebno primeniti na zapis. Vrednosti polja se zadržavaju, a polja koja nisu navedena u ovom parametru ostaju na svojim originalnim pozicijama.
-   `missingField`: Navodi očekivanu radnju za vrednosti koje nedostaju u redu koji sadrži manje kolona nego što se očekuje. Sledeće vrednosti su važeće:
    -   `MissingField.Error`: (Podrazumevano) Označava da polja koja nedostaju treba da dovode do greške. Ako nije uneta nijedna vrednost za parametar`missingField`, koristi se ova vrednost.
    -   `MissingField.Ignore`: Označava da polja koja nedostaju treba zanemariti.
    -   `MissingField.UseNull`: Označava da polja koja nedostaju treba da budu uključena kao `null` vrednosti.


## Examples

### Example #1
Preuređivanje nekih polja iz zapisa.
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
Promenite redosled nekih polja unutar zapisa i uključite vrednost `null` za svako polje koje nedostaje.
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
