---
title: List.Percentile
---

# List.Percentile


## Description

指定された確率に対応する 1 つまたは複数のサンプルのパーセンタイルを返します。


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

リスト <code>list</code> の 1 つまたは複数のサンプルのパーセンタイルを返します。値 <code>percentiles</code> が 0.0 から 1.0 の範囲の数値である場合、パーセンタイルとして処理され、確率に対応する単一の値が    結果として返されます。値 <code>percentiles</code> が 0.0 から 1.0 の範囲の値を含む数値のリストである場合、入力の確率に対応する    パーセンタイルのリストが結果として返されます。上級ユーザーは、<code>options</code> 内の PercentileMode オプションを使用してより詳細な補間メソッドを選択できますが、ほとんどの使用には推奨されていません。    定義済みの記号 <code>PercentileMode.ExcelInc</code> と <code>PercentileMode.ExcelExc</code> は、Excel 関数    <code>PERCENTILE.INC</code> と <code>PERCENTILE.EXC</code> で使用されている補間メソッドと一致します。既定の動作は <code>PercentileMode.ExcelInc</code> と一致します。記号    <code>PercentileMode.SqlCont</code> と <code>PercentileMode.SqlDisc</code> はそれぞれ <code>PERCENTILE_CONT</code> と    <code>PERCENTILE_DISC</code> の SQL Server の動作と一致します。  


## Examples

### Example #1 
リスト &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; の第 1 四分位数を求めます。
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Excel の &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; に一致する補間メソッドを使用してリスト &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; の四分位数を求めます。
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
