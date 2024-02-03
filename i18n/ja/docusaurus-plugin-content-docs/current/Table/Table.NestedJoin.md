---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

指定された列でテーブルを結合し、結合結果を新しい列に生成します。


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Details

<code>table1</code> の行と <code>table2</code> の行を、(<code>table1</code> の) <code>key1</code> と (<code>table2</code> の) <code>key2</code> で選択されたキー列の値の等値に基づいて結合します。結果は <code>newColumnName</code> という名前の列に入力されます。<br />省略可能な <code>joinKind</code> では、実行する結合の種類を指定します。<code>joinKind</code> を指定しなかった場合、既定では、左外部結合が実行されます。<br /><code>keyEqualityComparers</code> の省略可能な設定を含めると、キー列の比較方法を指定できます。この機能は現在、内部での使用のみが想定されています。<br />  


## Examples

### Example #1 
1 つのキー列を使用して 2 つのテーブルを結合します。
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
