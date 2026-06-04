---
title: Record.ReorderFields
---

# Record.ReorderFields


Změní pořadí polí záznamů tak, aby odpovídala pořadí seznamu názvů polí.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Změní pořadí polí záznamu tak, aby odpovídala pořadí seznamu názvů polí.

-   `record`: Záznam obsahující pole, jejichž pořadí se má změnit.
-   `fieldOrder`: Seznam obsahující nové pořadí polí, které se má použít pro záznam. Hodnoty polí jsou zachovány a pole, která nejsou uvedena v tomto parametru, zůstanou na původních pozicích.
-   `missingField`: Určuje očekávanou akci pro chybějící hodnoty v řádku, který obsahuje méně polí, než bylo očekáváno. Následující hodnoty jsou platné:
    -   `MissingField.Error`: (Výchozí) Označuje, že chybějící pole by měla způsobit chybu. Pokud není pro parametr `missingField` zadána žádná hodnota, použije se tato hodnota.
    -   `MissingField.Ignore`: Označuje, že chybějící pole by se měla ignorovat.
    -   `MissingField.UseNull`: Označuje, že chybějící pole by měla být zahrnuta jako hodnoty `null`.


## Examples

### Example #1
Změní pořadí některých polí v záznamu.
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
Přeuspořádat některá pole v záznamu a u všech chybějících polí uvést `null`
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
