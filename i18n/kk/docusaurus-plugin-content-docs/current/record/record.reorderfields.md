---
title: Record.ReorderFields
---

# Record.ReorderFields


Жазба өрістерінің ретін өріс атауы тізімінің ретіне сәйкес өзгертеді.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Жазба өрістерінің ретін өріс атауы тізімінің ретіне сәйкес өзгертеді.

-   `record`: Қайта ретке келтіру үшін өрістерді қамтитын жазба.
-   `fieldOrder`: Жазбаға қолдану үшін өрістердің жаңа ретін қамтитын тізім. Өріс мәндері сақталады, ал осы параметрде көрсетілмеген өрістер бастапқы орындарында қалады.
-   `missingField`: күтілгеннен аз өрістерді қамтитын жолдағы жетіспейтін мәндер үшін күтілетін әрекетті көрсетеді. Келесі мәндер жарамды:
    -   `MissingField.Error`: (Әдепкі) Жетіспейтін өрістер қатеге әкелетінін көрсетеді. Егер `missingField` параметрі үшін ешқандай мән енгізілмесе, бұл мән пайдаланылады.
    -   `MissingField.Ignore`: Жетіспейтін өрістерді елемеу керек екенін көрсетеді.
    -   `MissingField.UseNull`: Жетіспейтін өрістер `null` мәндері ретінде енгізілуі тиіс екенін көрсетеді.


## Examples

### Example #1
Жазбадағы кейбір өрістердің ретін өзгерту.
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
Жазбадағы кейбір өрістердің ретін өзгертіңіз және кез келген жетіспейтін өрістер үшін `null` қосыңыз.
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
