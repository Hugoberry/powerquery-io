---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

<code>parameters</code> で指定されているパラメーターと <code>options</code> で指定されているオプションを使用して、<code>query</code> を <code>target</code> に対して評価します。<br />クエリの出力は <code>target</code> によって定義されています。<br /><code>target</code> によって、<code>query</code> で記述されている操作のコンテキストが提供されます。<br /><code>query</code> は <code>target</code> に対して実行されるクエリを記述します。<code>query</code> は <code>target</code> に特有の形式で表記されます (例: T-SQL ステートメント)。<br />省略可能な <code>parameters</code> の値には、<code>query</code> で期待されるパラメーター値を提供するため、必要に応じてリストまたはレコードのどちらかを含めることができます。<br />省略可能な <code>options</code> レコードには、<code>target</code> に対する <code>query</code> の評価動作に影響を及ぼすオプションが含まれる可能性があります。これらのオプションは <code>target</code> に固有です。<br />



## Category
Values
