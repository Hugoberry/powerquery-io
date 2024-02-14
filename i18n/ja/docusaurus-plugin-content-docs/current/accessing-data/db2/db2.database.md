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

サーバー <code>server</code> 上の DB2 データベースの <code>database</code> という名前のデータベース インスタンス内の使用できる SQL テーブルとビューのテーブルを返します。ポートには、必要に応じて、サーバーをコロンで区切って指定できます。省略可能なレコード パラメーター <code>options</code> を指定して、次のオプションを制御できます:    <ul><li><code>CreateNavigationProperties</code> : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は true)。</li><li><code>NavigationPropertyNameGenerator</code> : ナビゲーション プロパティの名前の作成に使用される関数。</li><li><code>Query</code> : データの取得に使用するネイティブ SQL クエリ。クエリで複数の結果セットが生成される場合は、最初の結果セットのみ返されます。</li><li><code>CommandTimeout</code> : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。</li><li><code>ConnectionTimeout</code> : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。</li><li><code>HierarchicalNavigation</code> : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)。</li><li><code>Implementation</code> : 使用する内部データベース プロバイダーの実装を指定します。有効な値は &quot;IBM&quot; と &quot;Microsoft&quot; です。</li><li><code>BinaryCodePage</code> : DB2 FOR BIT バイナリ データを文字列にデコードする CCSID (コード化文字セット識別コード) の番号。Implementation = “Microsoft” に適用されます。変換を無効にするには 0 を設定します (既定)。データベース エンコードに基づいて変換するには 1 を設定します。アプリケーション エンコードに変換するには他の CCSID 番号を設定します。</li><li><code>PackageCollection</code> : SQL ステートメントを処理するのに必要な共有パッケージの使用を有効にするパッケージ コレクションの文字列値を指定します (既定値は &quot; NULLID&quot;)。Implementation = &quot; Microsoft&quot; に適用されます。</li><li><code>UseDb2ConnectGateway</code> : Db2 Connect ゲートウェイを使用して接続を確立しているかどうかを指定します。Implementation = &quot;Microsoft&quot; に適用されます。</li></ul>    レコード パラメーターは、[option1 = value1, option2 = value2...] または [Query = "select ..."] などのように指定します。    



## Category
Accessing data
