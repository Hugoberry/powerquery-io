---
title: Value.NativeQuery
---

# Value.NativeQuery


ターゲットに対するクエリを評価します。


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

`parameters` で指定されているパラメーターと `options` で指定されているオプションを使用して、`query` を `target` に対して評価します。

クエリの出力は `target` によって定義されています。

`target` によって、`query` で記述されている操作のコンテキストが提供されます。

`query` は `target` に対して実行されるクエリを記述します。`query` は `target` に特有の形式で表記されます (例: T-SQL ステートメント)。

省略可能な `parameters` の値には、`query` で期待されるパラメーター値を提供するため、必要に応じてリストまたはレコードのどちらかを含めることができます。

省略可能な `options` レコードには、`target` に対する `query` の評価動作に影響を及ぼすオプションが含まれる可能性があります。これらのオプションは `target` に固有です。



## Category
Values
