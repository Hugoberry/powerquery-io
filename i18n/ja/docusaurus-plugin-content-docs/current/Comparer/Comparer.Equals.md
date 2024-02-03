---
title: Comparer.Equals
---

# Comparer.Equals


## Description

指定された 2 つの値が等しいかどうかをチェックし、それに基づいて論理値を返します。


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

提供されている <code>comparer</code> を使用して、指定した値 <code>x</code> と <code>y</code> が等しいかどうかのチェックに基づいて <code>logical</code> 値を返します。      <div>        <code>comparer</code> は比較を制御するために使用する <code>Comparer</code> です。        比較関数は 2 つの引数を承認し、最初の値が 2 番目の値以下であるか、等しいか、大きいかに基づいて -1、0、または 1 を返します。        比較関数を使用すると、大文字小文字を区別しない比較、またはカルチャとロケールに対応した比較を行うことができます。      </div>      <div>        命令文の中で以下の標準で用意された比較関数を使用できます:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 完全一致の順次比較を行います</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 完全一致の順次比較 (大文字小文字を区別しない) を行います</li>        <li> <code>Comparer.FromCulture</code>: カルチャに対応した比較を行います</li>      </ul>


## Examples

### Example #1 
「1」と「A」を、「en-US」ロケールを使用して比較し、値が等しいかどうかを判断します。
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
