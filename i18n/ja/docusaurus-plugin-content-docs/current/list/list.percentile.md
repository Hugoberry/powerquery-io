---
title: List.Percentile
---

# List.Percentile


指定された確率に対応する 1 つまたは複数のサンプルのパーセンタイルを返します。


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

リスト `list` の 1 つまたは複数のサンプルのパーセンタイルを返します。値 `percentiles` が 0.0 から 1.0 の範囲の数値である場合、パーセンタイルとして処理され、確率に対応する単一の値が 結果として返されます。値 `percentiles` が 0.0 から 1.0 の範囲の値を含む数値のリストである場合、入力の確率に対応する パーセンタイルのリストが結果として返されます。  
  
上級ユーザーは、`options` 内の PercentileMode オプションを使用してより詳細な補間メソッドを選択できますが、ほとんどの使用には推奨されていません。 定義済みの記号 `PercentileMode.ExcelInc` と `PercentileMode.ExcelExc` は、Excel 関数 `PERCENTILE.INC` と `PERCENTILE.EXC` で使用されている補間メソッドと一致します。既定の動作は `PercentileMode.ExcelInc` と一致します。記号 `PercentileMode.SqlCont` と `PercentileMode.SqlDisc` はそれぞれ `PERCENTILE_CONT` と `PERCENTILE_DISC` の SQL Server の動作と一致します。


## Examples

### Example #1
リスト `{5, 3, 1, 7, 9}` の第 1 四分位数を求めます。
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Excel の `PERCENTILE.EXC` に一致する補間メソッドを使用してリスト `{5, 3, 1, 7, 9}` の四分位数を求めます。
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
