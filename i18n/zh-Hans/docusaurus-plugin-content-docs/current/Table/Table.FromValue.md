---
title: Table.FromValue
---

# Table.FromValue


从提供的值创建具有一列的表。


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

使用包含所提供的值或值列表 `value` 的列创建表。可以指定可选记录参数 `options` 来控制以下选项:

-   `DefaultColumnName`: 从列表或标量值构造表时使用的列名。


## Examples

### Example #1
从值 1 创建一个表。
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
从列表创建一个表。
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3
使用自定义列名从值 1 创建一个表。
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
