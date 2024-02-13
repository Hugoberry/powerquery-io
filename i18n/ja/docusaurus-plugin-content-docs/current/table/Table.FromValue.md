---
title: Table.FromValue
---

# Table.FromValue


指定された値を列に含めたテーブルを作成します。


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

指定された値または値リスト <code>value</code> を列に含めたテーブルを作成します。省略可能なレコード パラメーター <code>options</code> を指定して、次のオプションを制御できます:    <ul>    <li> <code>DefaultColumnName</code> : リストまたはスカラー値からテーブルを生成するのに使用された列名。</li>    </ul>  


## Examples

### Example #1 
値 1 からテーブルを作成します。
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
リストからテーブルを作成します。
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
カスタム列名を使用して、値 1 からテーブルを作成します。
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
