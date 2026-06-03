---
title: Record.ReorderFields
---

# Record.ReorderFields


Ordnet die Datensatzfelder neu an, um der Reihenfolge einer Liste von Feldnamen zu entsprechen.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Ordnet die Felder eines Datensatzes so neu an, dass sie der Reihenfolge einer Liste von Feldnamen entsprechen.

-   `record`: Der Datensatz, der die Felder enthält, die neu angeordnet werden sollen.
-   `fieldOrder`: Eine Liste mit der neuen Reihenfolge der Felder, die auf den Datensatz angewendet werden sollen. Feldwerte werden beibehalten, und Felder, die nicht in diesem Parameter aufgeführt sind, verbleiben in ihren ursprünglichen Positionen.
-   `missingField`Gibt die erwartete Aktion für fehlende Werte in einer Zeile an, die weniger Felder als die erwartete Anzahl enthält. Die folgenden Werte sind gültig:
    -   `MissingField.Error`: (Standard) Gibt an, dass fehlende Felder zu einem Fehler führen sollen. Wenn für den `missingField` Parameter kein Wert eingegeben wird, wird dieser Wert verwendet.
    -   `MissingField.Ignore`: Gibt an, dass fehlende Felder ignoriert werden sollen.
    -   `MissingField.UseNull`: Gibt an, dass fehlende Felder als `null`\-Werte eingeschlossen werden sollen.


## Examples

### Example #1
Sortiert einige der Felder im Datensatz neu.
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
Ordnen Sie einige Felder im Datensatz neu an und fügen Sie `null` für fehlende Felder hinzu.
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
