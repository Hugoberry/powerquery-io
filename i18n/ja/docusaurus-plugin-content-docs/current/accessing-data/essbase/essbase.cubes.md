---
title: Essbase.Cubes
---

# Essbase.Cubes


Essbase サーバーによってグループ化された Essbase インスタンスのキューブを返します。


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

APS サーバー `url` にある Essbase インスタンスから、Essbase サーバーによってグループ化されたテーブルを返します。オプションのレコード パラメーター `options` を指定して、次のオプションを制御できます。

-   `CommandTimeout` : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。



## Category
Accessing data
