---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Adobe Analytics でレポートのスイートを返します。


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Adobe Analytics から多次元パッケージのテーブルを返します。省略可能なレコード パラメーター `options` を指定すると、次のオプションを制御できます。

-   `HierarchicalNavigation` : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)。
-   `MaxRetryCount` : クエリの結果をポーリングするときに実行する再試行の回数。既定値は 120 です。
-   `RetryInterval` : 1 つの再試行から次の再試行までの時間。既定値は 1 秒です。
-   `Implementation` : Adobe Analytics API のバージョンを指定します。有効な値は "2.0" です。既定では API バージョン 1.4 が使用されます。



## Category
Accessing data
