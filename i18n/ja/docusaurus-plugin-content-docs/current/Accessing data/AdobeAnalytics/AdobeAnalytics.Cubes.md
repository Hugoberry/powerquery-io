---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Adobe Analytics でレポートのスイートを返します。


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Adobe Analytics から多次元パッケージのテーブルを返します。省略可能なレコード パラメーター <code>options</code> を指定すると、次のオプションを制御できます。    <ul><li><code>HierarchicalNavigation</code> : テーブルをそのスキーマ名でグループ化して表示するかどうかを設定する論理値 (true/false、既定値は false)。</li><li><code>MaxRetryCount</code> : クエリの結果をポーリングするときに実行する再試行の回数。既定値は 120 です。</li><li><code>RetryInterval</code> : 1 つの再試行から次の再試行までの時間。既定値は 1 秒です。</li><li><code>Implementation</code> : Adobe Analytics API のバージョンを指定します。有効な値は &quot;2.0&quot; です。既定では API バージョン 1.4 が使用されます。</li></ul>    



## Category
Accessing data
