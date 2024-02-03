---
title: Table.FromList
---

# Table.FromList


## Description

Перетворює список у таблицю, застосовуючи зазначену функцію розділення до кожного пункту у списку.


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


## Details

Перетворює список <code>list</code> у таблицю, застосовуючи додаткову функцію розділення <code>splitter</code> до кожного пункту у списку. За замовчуванням, список вважається списком текстових значень, який розділяється комами. Додатковим параметром <code>columns</code> може бути кількість стовпців, списком стовпців або TableType. Можна також вказати додаткові параметри <code>default</code> і <code>extraValues</code>.


## Examples

### Example #1 
Створіть таблицю зі списку за допомогою роздільника за замовчуванням.
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
Створіть таблицю зі списку за допомогою спеціального роздільника.
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
Створіть таблицю зі списку за допомогою роздільника Record.FieldValues.
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
