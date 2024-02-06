---
title: Informix.Database
---

# Informix.Database


Informix データベースで利用可能な SQL テーブルとビューのテーブルを返します。


## Syntax

```powerquery
Informix.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

サーバー <code>server</code> 上の Informix データベースの <code>database</code> という名前のデータベース インスタンス内の使用できる SQL テーブルとビューのテーブルを返します。ポートには、必要に応じて、サーバーをコロンで区切って指定できます。省略可能なレコード パラメーター <code>options</code> を指定して、次のオプションを制御できます:    <ul><li><code>CreateNavigationProperties</code> : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は true)。</li><li><code>NavigationPropertyNameGenerator</code> : ナビゲーション プロパティの名前の作成に使用される関数。</li><li><code>Query</code> : データの取得に使用するネイティブ SQL クエリ。クエリで複数の結果セットが生成される場合は、最初の結果セットのみ返されます。</li><li><code>CommandTimeout</code> : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。</li><li><code>ConnectionTimeout</code> : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。</li><li><code>HierarchicalNavigation</code> : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)。</li></ul>    レコード パラメーターは、[option1 = value1, option2 = value2...] または [Query = "select ..."] などのように指定します。    



## Category
Accessing data
