---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Analysis Services データベースから多次元キューブまたは表形式モデルのテーブルを返します。


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

サーバー `server` 上の Analysis Services データベース `database` から多次元キューブまたは表形式モデルのテーブルを返します。省略可能なレコード パラメーター `options` を指定して、次のオプションを制御できます。

-   `Query` : データの取得に使用するネイティブ MDX クエリ。
-   `TypedMeasureColumns` : 多次元モデルまたは表形式モデルで指定された型が、追加されたメジャー列の型に使用されるかどうかを示す論理値。false に設定されると、型 "number" がすべてのメジャー列に使用されます。このオプションの既定値は false です。
-   `Culture` : データのカルチャを指定するカルチャ名。'Locale Identifier' 接続文字列プロパティに対応します。
-   `CommandTimeout` : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値はドライバーによって異なります。
-   `ConnectionTimeout` : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。
-   `SubQueries` : 接続文字列の "SubQueries" プロパティの値を設定する数値 (0、1、2)。これにより、サブセレクトまたはサブキューブの計算済みのメンバーの動作が制御されます (既定値は 2 です)。
-   `Implementation`



## Category
Accessing data
