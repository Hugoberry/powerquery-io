---
title: Stripe.Contents
---

# Stripe.Contents


API に呼び出しの数を制限するオプション付きで、Stripe API に対する呼び出しを行います。


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

https://api.stripe.com/v1/<code>method</code> の Stripe API に対して呼び出しを行います。追加のパラメーターとして渡されるオプションのレコード <code>query</code> と、API のリクエスト数制限としてオプションの <code>pageLimit</code> を指定します。最近のデータが最初に返されます。<code>pageLimit</code> を指定しない場合、すべてのデータが返されます。Stripe バージョン 2015-10-16 が使用されます。


## Examples

### Example #1 
すべての請求データを返します
```powerquery
Stripe.Contents("請求額")
```

Result: 
```powerquery
現在の Stripe アカウントのすべての請求データを含めたテーブル
```


### Example #2 
請求データのうち 1 ページを返します
```powerquery
Stripe.Contents("請求額"、[]、1)
```

Result: 
```powerquery
現在の Stripe アカウントの最近の請求データを含めたテーブル
```



