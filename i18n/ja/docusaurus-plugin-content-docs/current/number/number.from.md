---
title: Number.From
---

# Number.From


指定された値から数値を作成します。


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

指定された `value` から `number` 値を返します。省略可能な `culture` を指定することもできます (例: "en-US")。 指定された `value` が `null` の場合、`Number.From` は `null` を返します。指定された `value` が `number` の場合、`value` が返されます。次の型の値を `number` 値に変換できます:

-   `text`: テキスト形式の表記からの `number` 値。一般的なテキスト形式が処理の対象になります ("15"、"3,423.10"、"5.0E-10")。詳細については `Number.FromText` を参照してください。
-   `logical`: `true` の場合は 1、`false` の場合は 0。
-   `datetime`: 相当する OLE オートメーション日付を含む倍精度浮動小数点数。
-   `datetimezone`: `value` のローカルな日付および時刻に相当する OLE オートメーション日付を含む倍精度浮動小数点数。
-   `date`: 相当する OLE オートメーション日付を含む倍精度浮動小数点数。
-   `time`: 小数の日数で表されます。
-   `duration`: 整数と小数の日数で表されます。

`value` が他の型の場合、エラーが返されます。


## Examples

### Example #1
`"4"` の `number` 値を取得します。
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`#datetime(2020, 3, 20, 6, 0, 0)` の `number` 値を取得します。
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
`"12.3%"` の `number` 値を取得します。
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
