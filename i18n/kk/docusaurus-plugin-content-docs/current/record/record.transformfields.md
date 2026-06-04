---
title: Record.TransformFields
---

# Record.TransformFields


Көрсетілген түрлендірулерді қолданудан кейін жазбаны қайтарады.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

`transformOperations` тізімінде көрсетілген түрлендірулерді `record` қатысты қолданудан кейін жазбаны қайтарады. Қазіргі уақытта бір немесе бірнеше өрісті түрлендіруге болады.

Егер бір өріс түрлендіріліп жатса, `transformOperations` екі элементтен тұратын тізім болады деп күтіледі. `transformOperations` ішіндегі бірінші элемент және `transformOperations` ішіндегі екінші элемент түрлендіру үшін пайдаланылатын функцияны көрсетеді. Мысалы, `{"Quantity", Number.FromText}`

Егер бірнеше өріс түрлендіріліп жатса, `transformOperations` тізімдердің тізімі болады деп күтіледі, мұндағы әрбір ішкі тізім өріс атау мен түрлендіру әрекетінің жұбы болады. Мысалы, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
"Баға" өрісін санға түрлендіріңіз.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2
"OrderID" және "Баға" өрістерін сандарға түрлендіріңіз.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
