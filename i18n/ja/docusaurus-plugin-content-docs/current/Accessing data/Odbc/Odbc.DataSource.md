---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

ODBC データ ソースから SQL テーブルとビューのテーブルを返します。


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

接続文字列 <code>connectionString</code> によって指定された ODBC データ ソースから、SQL テーブルとビューのテーブルを返します。<code>connectionString</code> はテキストまたはプロパティ値のペアのレコードを使用できます。プロパティ値は、テキストまたは数値のどちらかにできます。省略可能なレコード パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。レコードには次のフィールドを含めることができます。    <ul><li><code>CreateNavigationProperties</code> : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は true)。</li><li><code>HierarchicalNavigation</code> : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)。</li><li><code>ConnectionTimeout</code> : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値は 15 秒です。</li><li><code>CommandTimeout</code> : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。</li><li><code>SqlCompatibleWindowsAuth</code> : Windows 認証のために SQL Server 互換の接続文字列オプションを生成するかどうかを決める論理値 (True/False)。既定値は True です。</li></ul>


## Examples

### Example #1 
指定された接続文字列から SQL テーブルとビューを返します。
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
