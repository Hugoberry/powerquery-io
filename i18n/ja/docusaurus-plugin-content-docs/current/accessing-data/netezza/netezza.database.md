---
title: Netezza.Database
---

# Netezza.Database


データを IBM Netezza データベースからインポートします。


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

サーバー `server` 上の Netezza サーバー データベース `database` から Netezza テーブル、ビュー、ストアド関数のテーブルを返します。サーバーと共に、必要に応じてポートをコロンで区切って指定できます。省略可能なレコード パラメーター、`options` を指定すると、以下のオプションを制御できます:

-   `CreateNavigationProperties`: ナビゲーション プロパティを生成するかどうかを戻り値で設定する論理値 (true/false、既定値は true)
-   `HierarchicalNavigation`: テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)
-   `ConnectionTimeout`: サーバーへの接続の試行を破棄するまで待機する長さを制御する期間。既定値はドライバーによって異なります。
-   `CommandTimeout`: サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値はドライバーによって異なります。
-   `NormalizeDatabaseName`: データベース名を大文字に正規化するか、文字どおりに解釈するかどうかを設定する論理値 (true/false、既定値は true)。

レコード パラメーターは、\[option1 = value1, option2 = value2...\] と指定されます。


## Examples

### Example #1
IBM Netezza プロジェクトのテーブルを一覧表示します。
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



