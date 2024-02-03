---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Essbase サーバーによってグループ化された Essbase インスタンスのキューブを返します。


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

APS サーバー <code>url</code> にある Essbase インスタンスから、Essbase サーバーによってグループ化されたテーブルを返します。オプションのレコード パラメーター <code>options</code> を指定して、次のオプションを制御できます。    <ul><li><code>CommandTimeout</code> : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。</li></ul>



## Category
Accessing data
