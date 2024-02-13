---
title: Table.FromRows
---

# Table.FromRows


行の値と列 (省略可能) のリストからテーブルを作成します


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

リスト <code>rows</code> からテーブルを作成します。リストの各要素は、1 つの行の列値を含む内側リストです。省略可能な列名のリスト、テーブル型、または列の数を <code>columns</code> に指定できます。


## Examples

### Example #1 
列 [CustomerID] に値 \{1, 2}、列 [Name] に値 \{&#34;Bob&#34;, &#34;Jim&#34;}、列 [Phone] に値 \{&#34;123-4567&#34;, &#34;987-6543&#34;} を含むテーブルを返します。
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
列 [CustomerID] に値 \{1, 2}、列 [Name] に値 \{&#34;Bob&#34;, &#34;Jim&#34;}、列 [Phone] に値 \{&#34;123-4567&#34;, &#34;987-6543&#34;} を含むテーブルを返します。[CustomerID] は数値型で、[Name] および [Phone] はテキスト型です。
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
