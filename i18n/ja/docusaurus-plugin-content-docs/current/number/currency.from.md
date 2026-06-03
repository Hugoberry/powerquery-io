---
title: Currency.From
---

# Currency.From


指定された値から通貨の値を返します。


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

指定された `value` から `currency` 値を返します。指定された `value` が `null` の場合、`Currency.From` は `null` を返します。指定された `value` が通貨の範囲内の `number` である場合、`value` の小数部は、小数点以下 4 桁に端数処理返されます。`value` が他の型の場合、まずは `Number.FromText` を参照して `number` 値に変換します。有効な通貨の範囲は、`-922,337,203,685,477.5808` から `922,337,203,685,477.5807` です。利用可能な端数処理モードについては、`Number.Round` をご覧ください。既定は、`RoundingMode.ToEven` です。省略可能な `culture` を指定することもできます (例: "en-US")。


## Examples

### Example #1
`"1.23455"` の `currency` 値を取得します。
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
`RoundingMode.Down` を使用して、`"1.23455"` の `currency` 値を取得します。
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
