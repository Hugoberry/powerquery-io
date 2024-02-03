---
title: Sql.Database
---

# Sql.Database


## Description

SQL Server データベースの SQL テーブル、ビュー、およびストアド関数のテーブルを返します。


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

サーバー <code>server</code> 上の SQL Server データベース <code>database</code> の SQL テーブル、ビュー、ストアド関数のテーブルを返します。ポートには、必要に応じて、サーバーをコロンまたはコンマで区切って指定できます。省略可能なレコード パラメーター <code>options</code> を指定して、次のオプションを制御できます:    <ul><li><code>Query</code> : データの取得に使用するネイティブ SQL クエリ。クエリで複数の結果セットが生成される場合は、最初の結果セットのみ返されます。</li><li><code>CreateNavigationProperties</code> : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は true)。</li><li><code>NavigationPropertyNameGenerator</code> : ナビゲーション プロパティの名前の作成に使用される関数。</li><li><code>MaxDegreeOfParallelism</code> : 生成された SQL クエリ内の &quot;maxdop&quot; クエリ句の値を設定する数。</li><li><code>CommandTimeout</code> : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。</li><li><code>ConnectionTimeout</code> : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。</li><li><code>HierarchicalNavigation</code> : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)。</li><li><code>MultiSubnetFailover</code> : 接続文字列の &quot; MultiSubnetFailover&quot; プロパティの値を設定する論理値 (true/false、既定値は false)。</li><li><code>UnsafeTypeConversions</code> : true の場合、型変換をフォールディング処理しようとして失敗し、クエリ全体が失敗する可能性がある論理値 (true/false)。通常の使用には推奨されていません。</li><li><code>ContextInfo</code> : 各コマンドの実行前に CONTEXT_INFO を設定するために使用されるバイナリ値です。</li><li><code>OmitSRID</code> : true の場合、geometry および geography 型から Well-Known Text を生成するときに SRID を省略する論理値 (true/false)。</li><li><code>EnableCrossDatabaseFolding</code> : true の場合、同じサーバー上のデータベース全体にわたるクエリの折りたたみを許可する論理値 (true/false)。既定値は false です。</li></ul>    レコード パラメーターは、[option1 = value1, option2 = value2...] または [Query = "select ..."] などのように指定します。    



## Category
Accessing data
