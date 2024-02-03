---
title: Table.LastN
---

# Table.LastN


## Description

返回指定数量的最后几行。


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

返回表 <code>table</code> 中的最后几行，具体取决于 <code>countOrCondition</code> 的值:    <ul>    <li> 如果 <code>countOrCondition</code> 为数字，则将返回从位置(结尾 - <code>countOrCondition</code>)开始的多行。</li>    <li> 如果 <code>countOrCondition</code> 是条件，将以升序位置返回满足此条件的行，直到行不满足条件为止。</li></ul>


## Examples

### Example #1 
查找表的最后两行。
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
查找表中 [a] &gt; 0 的后几行。
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
