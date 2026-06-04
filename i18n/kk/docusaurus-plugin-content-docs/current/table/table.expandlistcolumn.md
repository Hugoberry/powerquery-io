---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Кестеде тізімдер бағаны берілген болса, оның әр мән үшін жолдың көшірмесін тізімінде жасау.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

`table` құрамында мәндер тізімі бар `column` болғанда, тізімді әр мән үшін жолға бөледі. Басқа бағандардағы мәндер әр жасалған жаңа жолда қайталанады. Бұл функция сондай-ақ кірістірілген кестелерді жазбалар тізімі ретінде қарастыру арқылы кеңейте алады.


## Examples

### Example #1
Тізім бағанын \[Аты\] бөліңіз.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```


### Example #2
Кірістірілген кесте бағанының \[құрамдастарын\] бөлу.
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
