---
title: OleDb.DataSource
---

# OleDb.DataSource


OLE DB データ ソースから SQL テーブルとビューのテーブルを返します。


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

接続文字列 <code>connectionString</code> によって指定された OLE DB データ ソースから、SQL テーブルとビューのテーブルを返します。<code>connectionString</code> には、テキストまたはプロパティ値のペアのレコードを使用できます。プロパティ値には、テキストまたは数字を使用できます。オプションのレコード パラメーター <code>options</code> を指定すると、追加のプロパティを指定できます。レコードには、次のフィールドを含めることができます。    <ul><li><code>CreateNavigationProperties</code> : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は true)。</li><li><code>NavigationPropertyNameGenerator</code> : ナビゲーション プロパティの名前の作成に使用される関数。</li><li><code>Query</code> : データの取得に使用するネイティブ SQL クエリ。クエリで複数の結果セットが生成される場合は、最初の結果セットのみ返されます。</li><li><code>HierarchicalNavigation</code> : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は true)。</li><li><code>ConnectionTimeout</code> : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。</li><li><code>CommandTimeout</code> : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。</li><li><code>SqlCompatibleWindowsAuth</code> : Windows 認証のために SQL Server 互換の接続文字列オプションを生成するかどうかを決める論理値 (True/False)。既定値は True です。</li></ul>    レコード パラメーターは、[option1 = value1, option2 = value2...] または [Query = "select ..."] などのように指定されます。



## Category
Accessing data
