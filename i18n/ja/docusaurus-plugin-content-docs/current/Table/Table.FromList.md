---
title: Table.FromList
---

# Table.FromList


## Description

指定された分割関数をリストの各項目に適用してリストをテーブルに変換します。


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

省略可能な分割関数 <code>splitter</code> をリストの各アイテムに適用してリスト <code>list</code> をテーブルに変換します。既定では、リストはコンマで区切られたテキスト値のリストであると見なされます。省略可能な <code>columns</code> は、列の数、列のリスト、TableType のいずれかです。省略可能な <code>default</code> および <code>extraValues</code> を指定することもできます。


## Examples

### Example #1 
既定のスプリッターを使用して、リストから表を作成します。
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
カスタム スプリッターを使用して、リストから表を作成します。
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
Record.FieldValues スプリッターを使用して、リストから表を作成します。
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
