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

<code>server</code> にある Snowflake Computing <code>warehouse</code> のテーブルの一覧を示すテーブルを返します。省略可能なレコード パラメーター <code>options</code> は、次のオプションを制御するために指定できます。<ul><li><code>Role</code>: 接続のロール名として使用するテキスト値。</li><li><code>CreateNavigationProperties</code>: 戻り値に対してナビゲーション プロパティを生成するかどうかを設定する論理 (true または false) 値 (既定値は true)。</li><li><code>ConnectionTimeout</code>: Snowflake からのネットワーク応答を待つ秒数。</li><li><code>CommandTimeout</code>: クエリの実行を待つ秒数。</li></ul>    


## Examples

### Example #1 
Snowflake ウェアハウス内のテーブルを一覧で表示します。
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



