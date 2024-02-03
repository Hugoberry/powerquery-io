---
title: Sql.Databases
---

# Sql.Databases


## Description

SQL Server 上のデータベースのテーブルを返します。


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

指定した SQL Server <code>server</code> 上のデータベースのテーブルを返します。オプションのレコード パラメーター <code>options</code> を指定すると、以下のオプションを制御できます:    <ul><li><code>CreateNavigationProperties</code> : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は true)。</li><li><code>NavigationPropertyNameGenerator</code> : ナビゲーション プロパティの名前の作成に使用される関数。</li><li><code>MaxDegreeOfParallelism</code> : 生成された SQL クエリ内の &quot;maxdop&quot; クエリ句の値を設定する数。</li><li><code>CommandTimeout</code> : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。</li><li><code>ConnectionTimeout</code> : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。</li><li><code>HierarchicalNavigation</code> : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)。</li><li><code>MultiSubnetFailover</code> : 接続文字列の &quot; MultiSubnetFailover&quot; プロパティの値を設定する論理値 (true/false、既定値は false)。</li><li><code>UnsafeTypeConversions</code> : true の場合、型変換をフォールディング処理しようとして失敗し、クエリ全体が失敗する可能性がある論理値 (true/false)。通常の使用には推奨されていません。</li><li><code>ContextInfo</code> : 各コマンドの実行前に CONTEXT_INFO を設定するために使用されるバイナリ値です。</li><li><code>OmitSRID</code> : true の場合、geometry および geography 型から Well-Known Text を生成するときに SRID を省略する論理値 (true/false)。</li><li><code>EnableCrossDatabaseFolding</code> : true の場合、同じサーバー上のデータベース全体にわたるクエリの折りたたみを許可する論理値 (true/false)。既定値は false です。</li></ul>    レコード パラメーターは、[option1 = value1, option2 = value2...] などのように指定されます。    <br />    サーバーで実行する SQL クエリの設定はサポートされません。SQL クエリを実行する代わりに、<code>Sql.Database</code> を使用する必要があります。    



## Category
Accessing data
