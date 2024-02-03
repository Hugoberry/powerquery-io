---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Көрсетілген түрлендірулерді қолданудан кейін жазбаны қайтарады.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

<code>transformOperations</code> тізімінде көрсетілген түрлендірулерді <code>record</code> қатысты қолданудан кейін жазбаны қайтарады.    Қазіргі уақытта бір немесе бірнеше өрісті түрлендіруге болады.      <div>Егер бір өріс түрлендіріліп жатса, <code>transformOperations</code> екі элементтен тұратын тізім болады деп күтіледі. <code>transformOperations</code> ішіндегі бірінші элемент және <code>transformOperations</code> ішіндегі екінші элемент түрлендіру үшін пайдаланылатын функцияны көрсетеді. Мысалы, <code>\{"Quantity", Number.FromText}</code></div>      <div>Егер бірнеше өріс түрлендіріліп жатса, <code>transformOperations</code> тізімдердің тізімі болады деп күтіледі, мұндағы әрбір ішкі тізім өріс атау мен түрлендіру әрекетінің жұбы болады. Мысалы, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
&#34;Баға&#34; өрісін санға түрлендіріңіз.
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
&#34;OrderID&#34; және &#34;Баға&#34; өрістерін сандарға түрлендіріңіз.
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
