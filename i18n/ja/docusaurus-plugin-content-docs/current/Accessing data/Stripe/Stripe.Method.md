---
title: Stripe.Method
---

# Stripe.Method


Stripe API に対して呼び出しを行います。


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

https://api.stripe.com/v1/<code>method</code> の Stripe API に対して呼び出しを行います。追加のパラメーターとして渡されるオプションのレコード <code>additionalParameters</code> と、予測される列名のリスト <code>ColumnNames</code> を指定します。Stripe バージョン 2015-10-16 が使用されます。


## Examples

### Example #1 
2015 年 11 月 1 日より後に作成されたイベントを含めたテーブルを返します
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
現在の Stripe アカウントについて、指定されたイベントを含めたテーブル
```


### Example #2 
すべての SKU を含めたテーブルを返します
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
現在の Stripe アカウントのためのすべての SKU を含めたテーブル
```



