---
title: Record.ReorderFields
---

# Record.ReorderFields


Zmení poradie polí záznamu tak, aby zodpovedalo poradiu zoznamu názvov polí.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Zmení poradie polí záznamu tak, aby zodpovedalo poradiu v zozname názvov polí.

-   `record`: Záznam obsahujúci polia, ktorých poradie sa má zmeniť.
-   `fieldOrder`: Zoznam obsahujúci nové poradie polí, ktoré sa má použiť pre záznam. Hodnoty polí sú zachované a polia, ktoré nie sú uvedené v tomto parametri, sú ponechané na pôvodných pozíciách.
-   `missingField`: Určuje očakávanú akciu pre chýbajúce hodnoty v riadku, ktorý obsahuje menej polí, ako sa očakáva. Platné sú nasledujúce hodnoty:
    -   `MissingField.Error`: (Predvolené) Označuje, že chýbajúce polia by mali viesť k chybe. Ak pre parameter `missingField` nie je zadaná žiadna hodnota, použije sa táto hodnota.
    -   `MissingField.Ignore`: Označuje, že chýbajúce polia by sa mali ignorovať.
    -   `MissingField.UseNull`: Označuje, že chýbajúce polia by mali byť zahrnuté ako `null` hodnoty.


## Examples

### Example #1
Zmeňte poradie polí v zázname.
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
Zmeňte poradie niektorých polí v zázname a uveďte `null` pre všetky chýbajúce polia.
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
