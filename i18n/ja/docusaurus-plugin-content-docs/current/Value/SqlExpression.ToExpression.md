---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


指定された SQL クエリを M コードに変換します。この関数は、内部での使用のみを想定しています。


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Remarks

<code>environment</code> で定義された利用可能な識別子を使用して、<code>sql</code> クエリを M コードに変換します。この関数は、内部での使用のみを想定しています。



## Category
Values.Implementation
