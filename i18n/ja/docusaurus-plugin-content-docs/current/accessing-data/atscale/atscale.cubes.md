---
title: AtScale.Cubes
---

# AtScale.Cubes


AtScale からの Import/DirectQuery キューブ データ。


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

サーバー `サーバー` の AtScale からキューブ データを返します。省略可能なレコード パラメーター `オプション` を指定して次のオプションを制御できます:

-   `TypedMeasureColumns`: 多次元モデルまたは表形式モデルで指定された型が、追加されたメジャー列の型に使用されるかどうかを示す論理値。false に設定されると、型 "number" がすべてのメジャー列に使用されます。このオプションの既定値は false です。
-   `CommandTimeout`: サーバー側クエリがキャンセルされるまでにどれほど長く実行を許可されるかを制御する期間 (秒)。既定値はドライバーによって異なります。
-   `ConnectionTimeout`: サーバーへの接続の試行が破棄されるまでにどれほど長く待機するかを制御する期間 (秒)。既定値はドライバーによって異なります。

レコード パラメーターは、\[option1 = value1, option2 = value2...\] と指定します。


## Examples

### Example #1
AtScale キューブのキューブ データを一覧表示します。
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



