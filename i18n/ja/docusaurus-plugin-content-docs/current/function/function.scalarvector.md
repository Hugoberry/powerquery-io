---
title: Function.ScalarVector
---

# Function.ScalarVector


ベクトル関数の上にスカラー関数を作成し、複数の呼び出しをバッチ処理します。


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

1 行の引数で <code>vectorFunction</code> を呼び出す <code>scalarFunctionType</code> 型のスカラー関数を返し、その単一の出力を返します。さらに、スカラー関数が Table.AddColumn などの入力テーブルの各行に対して繰り返し適用される場合、代わりに <code>vectorFunction</code> がすべての入力に対して 1 回適用されます。<br />名前と一致する列を持ち、<code>scalarFunctionType</code> のパラメーターを配置するテーブルに <code>vectorFunction</code> が渡されます。このテーブルの各行には、スカラー関数の 1 回の呼び出しの引数が含まれ、列は <code>scalarFunctionType</code> のパラメーターに対応します。<br /><code>vectorFunction</code> は、入力テーブルと同じ長さのリストを返さなければなりません。各位置の項目は、同じ位置の入力行のスカラー関数の評価と同じ結果でなければなりません。<br />入力テーブルにはストリーミングが入ってくることが予期されるので、入力が入ってきたときに <code>vectorFunction</code> は出力をストリーミングする必要があります。一度に 1 つの入力チャンクでしか動作しません。特に、<code>vectorFunction</code> は入力テーブルを複数回列挙してはなりません。<br />



## Category
Function
