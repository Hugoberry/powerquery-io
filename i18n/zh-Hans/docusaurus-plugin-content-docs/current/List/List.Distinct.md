---
title: List.Distinct
---

# List.Distinct


返回删除了重复项的值列表。


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

返回一个列表，该列表包含指定列表中已删除重复项的所有值。如果指定的列表为空，则结果为空列表。

-   `list`: 从中提取非重复值的列表。
-   `equationCriteria`: (可选)指定比较值时如何确定是否相等。此参数可以是键选择器函数、比较器函数或同时包含键选择器和比较器的列表。


## Examples

### Example #1
从列表 \{1, 1, 2, 3, 3, 3\} 中删除重复的项。
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
从列表末尾开始，选择文本长度唯一的水果。
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
从列表开头开始，选择唯一的水果，同时忽略大小写。
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
从一系列列表中提取具有唯一国家/地区名称的第一个列表，同时忽略大小写。将提取的列表放在新表的行中。
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
