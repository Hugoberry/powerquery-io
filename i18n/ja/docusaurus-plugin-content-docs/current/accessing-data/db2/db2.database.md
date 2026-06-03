---
title: DB2.Database
---

# DB2.Database


DB2 データベース内の使用できる SQL テーブルとビューのテーブルを返します。


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

サーバー `server` 上の DB2 データベースの `database` という名前のデータベース インスタンス内の使用できる SQL テーブルとビューのテーブルを返します。ポートはオプションで、サーバー名の後にコロンで区切って指定できます。オプションのレコード パラメーター `options` を指定して、次のオプションを制御できます:

-   `CreateNavigationProperties` : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は true)。
-   `NavigationPropertyNameGenerator` : ナビゲーション プロパティの名前の作成に使用される関数。
-   `Query` : データの取得に使用するネイティブ SQL クエリ。クエリで複数の結果セットが生成される場合は、最初の結果セットのみ返されます。
-   `CommandTimeout` : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。
-   `ConnectionTimeout` : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。
-   `HierarchicalNavigation` : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)。
-   `Implementation` : 使用する内部データベース プロバイダーの実装を指定します。有効な値は "IBM" と "Microsoft" です。
-   `BinaryCodePage` : DB2 FOR BIT バイナリ データを文字列にデコードする CCSID (コード化文字セット識別コード) の番号。Implementation = “Microsoft” に適用されます。変換を無効にするには 0 を設定します (既定)。データベース エンコードに基づいて変換するには 1 を設定します。アプリケーション エンコードに変換するには他の CCSID 番号を設定します。
-   `PackageCollection` : SQL ステートメントを処理するのに必要な共有パッケージの使用を有効にするパッケージ コレクションの文字列値を指定します (既定値は " NULLID")。Implementation = " Microsoft" に適用されます。
-   `UseDb2ConnectGateway` : Db2 Connect ゲートウェイを使用して接続を確立しているかどうかを指定します。Implementation = "Microsoft" に適用されます。

レコード パラメーターは、\[option1 = value1, option2 = value2...\] または \[Query = "select ..."\] などのように指定されます。



## Category
Accessing data
