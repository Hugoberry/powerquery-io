---
title: Table.FromValue
---

# Table.FromValue


根據提供的值建立包含資料行的資料表。


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

建立資料表，其中包含具有所提供之值或值清單 <code>value</code> 的資料行。您可以指定選擇性記錄參數 <code>options</code> 控制下列選項:    <ul>    <li> <code>DefaultColumnName</code>: 從清單或純量值建構資料表時所使用的資料行名稱。</li>    </ul>  


## Examples

### Example #1 
根據值 1 建立資料表。
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
根據清單建立資料表。
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
使用自訂資料行名稱建立從值 1 開始的資料表。
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
