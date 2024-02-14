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

SAP HANA データベース <code>server</code> から多次元パッケージのテーブルを返します。省略可能なレコード パラメーター <code>options</code> を指定すると、以下のオプションを制御できます。    <ul><li><code>Query</code> : データの取得に使用するネイティブ SQL クエリ。クエリで複数の結果セットが生成される場合は、最初の結果セットのみ返されます。</li><li><code>Distribution</code> : 接続文字列の &quot;分散&quot; プロパティの値を設定する SapHanaDistribution。ステートメント ルーティングは、ステートメントの実行前に分散システムの正しいサーバー ノードを評価する手段です。既定値は SapHanaDistribution.All です。</li><li><code>Implementation</code> : 使用する SAP HANA コネクタの実装を指定します。</li><li><code>EnableColumnBinding</code> : データをフェッチするときに、SAP HANA 結果セットの列に変数をバインドします。メモリ使用率を若干高くなることで、パフォーマンスが向上する可能性があります。既定値は false です。</li><li><code>ConnectionTimeout</code> : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値は 15 秒です。</li><li><code>CommandTimeout</code> : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。</li></ul>    



## Category
Accessing data
