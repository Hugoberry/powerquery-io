---
title: Record.ReorderFields
---

# Record.ReorderFields


Zmienia kolejność pól rekordów zgodnie z kolejnością listy nazw pól.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Zmienia kolejność pól rekordu, aby dopasować ją do kolejności listy nazw pól.

-   `record`: rekord zawierający pola do zmiany kolejności.
-   `fieldOrder`: lista zawierająca nową kolejność pól, które mają zostać zastosowane do rekordu. Wartości pól są zachowywane, a pola niewymienione w tym parametrze pozostają w swoich pierwotnych pozycjach.
-   `missingField`: określa oczekiwaną akcję dla brakujących wartości w wierszu zawierającym mniej pól niż oczekiwano. Następujące wartości są prawidłowe:
    -   `MissingField.Error`: (domyślnie) Wskazuje, że brakujące pola powinny powodować błąd. Jeśli nie wprowadzono wartości dla parametru `missingField`, używana jest ta wartość.
    -   `MissingField.Ignore`: Wskazuje, że brakujące pola powinny zostać zignorowane.
    -   `MissingField.UseNull`: Wskazuje, że brakujące pola powinny zostać uwzględnione jako wartości `null`.


## Examples

### Example #1
Zmień kolejność niektórych pól w rekordzie.
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
Zmień kolejność niektórych pól w rekordzie i uwzględnij `null` dla brakujących pól.
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
