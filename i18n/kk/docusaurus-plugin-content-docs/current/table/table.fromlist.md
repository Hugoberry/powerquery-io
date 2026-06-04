---
title: Table.FromList
---

# Table.FromList


Тізімдегі әр элементке көрсетілген бөлу функциясын қолдану арқылы тізімді кестеге түрлендіреді.


## Syntax

```powerquery
Table.FromList(
    list as list,
    optional splitter as function,
    optional columns as any,
    optional default as any,
    optional extraValues as ExtraValues.Type
) as table
```


## Remarks

Тізімдегі әр элементке `splitter` міндетті емес бөлу функциясын қолдану арқылы `list` тізімін кестеге түрлендіреді. Әдепкі бойынша, тізім үтірлермен бөлінген мәтіндік мәндердің тізімі деп есептеледі. Міндетті емес `columns` бағандар саны, бағандар тізімі немесе TableType болуы мүмкін. Сондай-ақ, міндетті емес `default` және `extraValues` көрсетуге болады.


## Examples

### Example #1
Әдепкі бөлгіш көмегімен тізімнен кесте жасау.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    null,
    {"Letter", "Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Letter = "a", #"Example Word" = "apple"],
    [Letter = "b", #"Example Word" = "ball"],
    [Letter = "c", #"Example Word" = "cookie"],
    [Letter = "d", #"Example Word" = "door"]
})
```


### Example #2
Реттелетін бөлгіш көмегімен тізімнен кесте жасау.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    Splitter.SplitByNothing(),
    {"Letter and Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [#"Letter and Example Word" = "a,apple"],
    [#"Letter and Example Word" = "b,ball"],
    [#"Letter and Example Word" = "c,cookie"],
    [#"Letter and Example Word" = "d,door"]
})
```


### Example #3
Record.FieldValues бөлгішінің көмегімен тізімнен кесте жасау.
```powerquery
Table.FromList(
    {
        [CustomerID = 1, Name = "Bob"],
        [CustomerID = 2, Name = "Jim"]
    },
    Record.FieldValues,
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob"],
    [CustomerID = 2, Name = "Jim"]
})
```




## Category
Table.Table construction
