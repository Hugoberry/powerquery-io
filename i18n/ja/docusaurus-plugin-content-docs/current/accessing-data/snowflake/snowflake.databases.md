---
title: Snowflake.Databases
---

# Snowflake.Databases


Snowflake コンピューティング ウェアハウスからデータをインポートします。


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

`server` にある Snowflake Computing `warehouse` のテーブルの一覧を示すテーブルを返します。省略可能なレコード パラメーター `options` は、次のオプションを制御するために指定できます。

-   `Role`: 接続のロール名として使用するテキスト値。
-   `CreateNavigationProperties`: 戻り値に対してナビゲーション プロパティを生成するかどうかを設定する論理 (true または false) 値 (既定値は true)。
-   `ConnectionTimeout`: Snowflake からのネットワーク応答を待つ秒数。
-   `CommandTimeout`: クエリの実行を待つ秒数。


## Examples

### Example #1
Snowflake ウェアハウス内のテーブルを一覧で表示します。
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



