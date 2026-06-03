---
title: Table.ReplaceValue
---

# Table.ReplaceValue


指定された列で値を別の値に置き換えます。


## Syntax

```powerquery
Table.ReplaceValue(
    table as table,
    oldValue as any,
    newValue as any,
    replacer as function,
    columnsToSearch as list
) as table
```


## Remarks

テーブルの指定列にある値を、新しい値に置き換えます。

-   `table`: 検索するテーブル。
-   `oldValue`: 置換対象の値。
-   `newValue`: 置換後の値。
-   `replacer`: 使用する値の置換関数。この関数には、元のテキストを新しいテキストに置き換える `Replacer.ReplaceText`、元の値を新しい値に置き換える `Replacer.ReplaceValue`、またはカスタムの置換関数を使用できます。
-   `columnsToSearch`: 置換対象の値を検索するための、テーブル内の特定列を含むリスト。


## Examples

### Example #1
列 B のテキスト "goodbye" を "world" に置き換え、値全体だけを一致させます。
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "goodbye"],
        [A = 3, B = "goodbyes"]
    }),
    "goodbye",
    "world",
    Replacer.ReplaceValue,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"],
    [A = 3, B = "goodbyes"]
})
```


### Example #2
列 B のテキスト "ur" を "or" に置き換え、値の任意の部分に一致させます。
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "wurld"]
    }),
    "ur",
    "or",
    Replacer.ReplaceText,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"]
})
```


### Example #3
米国の従業員の名前を匿名化します。
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each if [Country] = "US" then [Name] else false,
    each Text.Repeat("*", Text.Length([Name])),
    Replacer.ReplaceValue,
    {"Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "*****", Country = "US"],
    [Name = "Bob", Country = "CA"]
})
```


### Example #4
米国の従業員のすべての列を匿名化します。
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each [Country] = "US",
    "?",
    (currentValue, isUS, replacementValue) =>
        if isUS then
            Text.Repeat(replacementValue, Text.Length(currentValue))
        else
            currentValue,
    {"Name", "Country"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "?????", Country = "??"],
    [Name = "Bob", Country = "CA"]
})
```




## Category
Table.Transformation
