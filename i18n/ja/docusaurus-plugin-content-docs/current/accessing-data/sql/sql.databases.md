---
title: Sql.Databases
---

# Sql.Databases


SQL Server 上のデータベースのテーブルを返します。


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

指定した SQL Server `server` 上のデータベースのテーブルを返します。オプションのレコード パラメーター `options` を指定して、次のオプションを制御できます:

-   `CreateNavigationProperties` : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は true)。
-   `NavigationPropertyNameGenerator` : ナビゲーション プロパティの名前の作成に使用される関数。
-   `MaxDegreeOfParallelism` : 生成された SQL クエリ内の "maxdop" クエリ句の値を設定する数。
-   `CommandTimeout` : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。
-   `ConnectionTimeout` : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。
-   `HierarchicalNavigation` : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)。
-   `MultiSubnetFailover` : 接続文字列の " MultiSubnetFailover" プロパティの値を設定する論理値 (true/false、既定値は false)。
-   `UnsafeTypeConversions` : true の場合、型変換をフォールディング処理しようとして失敗し、クエリ全体が失敗する可能性がある論理値 (true/false)。通常の使用には推奨されていません。
-   `ContextInfo` : 各コマンドの実行前に CONTEXT\_INFO を設定するために使用されるバイナリ値です。
-   `OmitSRID` : true の場合、geometry および geography 型から Well-Known Text を生成するときに SRID を省略する論理値 (true/false)。
-   `EnableCrossDatabaseFolding` : true の場合、同じサーバー上のデータベース全体にわたるクエリの折りたたみを許可する論理値 (true/false)。既定値は false です。

レコード パラメーターは、\[option1 = value1, option2 = value2...\] などのように指定されます。  
  
サーバーで実行する SQL クエリの設定はサポートされていません。代わりに `Sql.Database` を使用して SQL クエリを実行する必要があります。



## Category
Accessing data
