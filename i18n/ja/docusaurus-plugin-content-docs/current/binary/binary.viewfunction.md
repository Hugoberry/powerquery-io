---
title: Binary.ViewFunction
---

# Binary.ViewFunction


ビュー (Binary.View を使用) で定義されたハンドラーによりインターセプトすることのできる関数を作成します。


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

`Binary.View` により作成されたビューで処理できる、`function` に基づいたビュー関数を作成します。

`Binary.View` の `OnInvoke` ハンドラーは、ビュー関数のハンドラーを定義するために使用できます。

組み込み操作のハンドラーと同様に、`OnInvoke` ハンドラーが指定されていない場合、そのハンドラーがビュー関数を処理しない場合、またはそのハンドラーでエラーが発生する場合は、ビューの最上位に対して `function` が適用されます。

`Binary.View` とカスタム ビュー関数の詳細な説明については、公開されている Power Query カスタム コネクタのドキュメントを参照してください。



## Category
Binary
