---
title: Record.ReorderFields
---

# Record.ReorderFields


Reordonează câmpurile înregistrării pentru a corespunde ordinii unei liste de nume de câmpuri.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Reordonează câmpurile unei înregistrări pentru a corespunde ordinii unei liste de nume de câmpuri.

-   `record`: înregistrarea care conține câmpurile de reordonat.
-   `fieldOrder`: o listă care conține noua ordine a câmpurilor de aplicat înregistrării. Valorile de câmp sunt menținute și câmpurile care nu sunt listate în acest parametru sunt lăsate în pozițiile lor inițiale.
-   `missingField`: specifică acțiunea așteptată pentru valorile lipsă dintr-un rând care conține mai puține câmpuri decât era de așteptat. Următoarele valori sunt valide:
    -   `MissingField.Error`: (valoare implicită) Indică faptul că câmpurile lipsă ar trebui să aibă ca rezultat o eroare. Dacă nu este introdusă nicio valoare pentru parametrul `missingField`, se utilizează această valoare.
    -   `MissingField.Ignore`: indică faptul că câmpurile lipsă trebuie ignorate.
    -   `MissingField.UseNull`: indică faptul că câmpurile lipsă trebuie incluse ca valori `null`.


## Examples

### Example #1
Reordonați unele dintre câmpurile din înregistrare.
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
Reordonați unele dintre câmpurile din înregistrare și includeți `null` pentru orice câmpuri lipsă.
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
