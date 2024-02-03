---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

ビューで (Table.View を介して) 定義されたハンドラーによりインターセプトすることのできる関数を作成します。


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

<code>Table.View</code> により作成されたビューで処理できる、<code>function</code> に基づいたビュー関数を作成します。<br /><code>Table.View</code> の <code>OnInvoke</code> ハンドラーは、ビュー関数のハンドラーを定義するために使用できます。<br />組み込み操作のハンドラーと同様に、<code>OnInvoke</code> ハンドラーが指定されていない場合、そのハンドラーがビュー関数を処理しない場合、またはそのハンドラーでエラーが発生する場合は、ビューの最上位に対して <code>function</code> が適用されます。<br /><code>Table.View</code> とカスタム ビュー関数の詳細な説明については、公開されている Power Query カスタム コネクタのドキュメントを参照してください。<br />



## Category
Table.Table construction
