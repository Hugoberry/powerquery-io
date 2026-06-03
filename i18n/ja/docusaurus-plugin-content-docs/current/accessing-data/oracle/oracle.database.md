---
title: Oracle.Database
---

# Oracle.Database


Oracle Database の SQL テーブルとビューのテーブルを返します。


## Syntax

```powerquery
Oracle.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

サーバー `server` 上の Oracle Database の SQL テーブルとビューのテーブルを返します。ポートはオプションで、サーバー名の後にコロンで区切って指定できます。オプションのレコード パラメーター `options` を指定して、次のオプションを制御できます:

-   `CreateNavigationProperties` : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は true)。
-   `NavigationPropertyNameGenerator` : ナビゲーション プロパティの名前の作成に使用される関数。
-   `Query` : データの取得に使用するネイティブ SQL クエリ。クエリで複数の結果セットが生成される場合は、最初の結果セットのみ返されます。
-   `CommandTimeout` : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。
-   `ConnectionTimeout` : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。
-   `HierarchicalNavigation` : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)。

レコード パラメーターは、\[option1 = value1, option2 = value2...\] または \[Query = "select ..."\] などのように指定されます。



## Category
Accessing data
