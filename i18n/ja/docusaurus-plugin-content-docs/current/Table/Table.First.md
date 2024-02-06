---
title: Table.First
---

# Table.First


先頭行または指定された既定値を返します。


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

<code>table</code> の先頭行を返します。テーブルが空の場合は、省略可能な既定値 <code>default</code> を返します。


## Examples

### Example #1 
テーブルの先頭行を探します。
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
テーブル &lt;code&gt;(\{})&lt;/code&gt; の先頭行を探します。空の場合は、[a = 0, b = 0] を返します。
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
