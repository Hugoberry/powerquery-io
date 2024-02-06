---
title: Table.FromList
---

# Table.FromList


Преобразует список в таблицу путем применения заданной функции разбиения к каждому элементу в списке.


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

Преобразует список <code>list</code> в таблицу путем применения необязательной функции разбиения <code>splitter</code> к каждому элементу в списке. По умолчанию считается, что список является списком текстовых значений, разделенных запятыми. Необязательный параметр <code>columns</code> может быть числом столбцов, списком столбцов или TableType. Также можно указать необязательные параметры <code>default</code> и <code>extraValues</code>.


## Examples

### Example #1 
Создание таблицы из списка с помощью стандартного разделителя.
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
Создание таблицы из списка с помощью настраиваемого разделителя.
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
Создание таблицы из списка с помощью разделителя Record.FieldValues.
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
