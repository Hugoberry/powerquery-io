---
title: SapHana.Database
---

# SapHana.Database


SAP HANA データベース内のパッケージを返します。


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

SAP HANA データベース `server` から多次元パッケージのテーブルを返します。省略可能なレコード パラメーター `options` を指定すると、以下のオプションを制御できます。

-   `Query` : データの取得に使用するネイティブ SQL クエリ。クエリで複数の結果セットが生成される場合は、最初の結果セットのみ返されます。
-   `Distribution` : 接続文字列の "分散" プロパティの値を設定する SapHanaDistribution。ステートメント ルーティングは、ステートメントの実行前に分散システムの正しいサーバー ノードを評価する手段です。既定値は SapHanaDistribution.All です。
-   `Implementation` : 使用する SAP HANA コネクタの実装を指定します。
-   `EnableColumnBinding` : データをフェッチするときに、SAP HANA 結果セットの列に変数をバインドします。メモリ使用率を若干高くなることで、パフォーマンスが向上する可能性があります。既定値は false です。
-   `ConnectionTimeout` : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値は 15 秒です。
-   `CommandTimeout` : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。



## Category
Accessing data
