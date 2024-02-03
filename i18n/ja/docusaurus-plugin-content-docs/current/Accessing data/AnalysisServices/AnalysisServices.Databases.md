---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

特定のホストの Analysis Services データベースを返します。


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Analysis Services インスタンス <code>server</code> 上のデータベースを返します。省略可能なレコード パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。レコードには、次のフィールドを含めることができます。    <ul><li><code>TypedMeasureColumns</code> : 多次元モデルまたは表形式モデルで指定された型が、追加されたメジャー列の型に使用されるかどうかを示す論理値。false に設定されると、型 &quot;number&quot; がすべてのメジャー列に使用されます。このオプションの既定値は false です。</li><li><code>Culture</code> : データのカルチャを指定するカルチャ名。&#39;Locale Identifier&#39; 接続文字列プロパティに対応します。</li><li><code>CommandTimeout</code> : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値はドライバーによって異なります。</li><li><code>ConnectionTimeout</code> : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。</li><li><code>SubQueries</code> : 接続文字列の &quot;SubQueries&quot; プロパティの値を設定する数値 (0、1、2)。これにより、サブセレクトまたはサブキューブの計算済みのメンバーの動作が制御されます (既定値は 2 です)。</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
