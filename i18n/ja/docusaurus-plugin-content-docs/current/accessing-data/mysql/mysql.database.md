---
title: MySQL.Database
---

# MySQL.Database


MySQL データベース内の使用できる SQL テーブル、ビュー、およびストアド スカラー関数のテーブルを返します。


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

サーバー `server` 上の MySQL データベースの `database` という名前のデータベース インスタンス内の使用できる SQL テーブル、ビュー、ストアド スカラー関数のテーブルを返します。ポートはオプションで、サーバー名の後にコロンで区切って指定できます。オプションのレコード パラメーター `options` を指定して、次のオプションを制御できます:

-   `Encoding` : サーバーに送信されるすべてのクエリのエンコードに使用される文字セットを指定する TextEncoding 値 (既定値は null)。
-   `CreateNavigationProperties` : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は true)。
-   `NavigationPropertyNameGenerator` : ナビゲーション プロパティの名前の作成に使用される関数。
-   `Query` : データの取得に使用するネイティブ SQL クエリ。クエリで複数の結果セットが生成される場合は、最初の結果セットのみ返されます。
-   `CommandTimeout` : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。
-   `ConnectionTimeout` : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。
-   `TreatTinyAsBoolean` : サーバーの tinyint 列を論理値として強制するかどうかを判断する論理値 (true/false)。既定値は true です。
-   `OldGuids` : char(36) 列 (false の場合) または binary(16) 列 (true の場合) が GUID として扱われるかを判断する論理値 (true/false)。既定値は false です。
-   `ReturnSingleDatabase` : すべてのデータベースのテーブルすべてを返す (false の場合) か指定されたデータベースのテーブルとビューを返す (true の場合) かを設定する論理値 (true/false)。既定値は false です。
-   `HierarchicalNavigation` : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)。

レコード パラメーターは、\[option1 = value1, option2 = value2...\] または \[Query = "select ..."\] などのように指定されます。



## Category
Accessing data
