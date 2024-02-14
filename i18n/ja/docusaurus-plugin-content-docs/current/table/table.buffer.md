---
title: Table.Buffer
---

# Table.Buffer


テーブルをメモリ内にバッファー処理して、評価中に外部から変更されないように分離します。


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

テーブルをメモリ内にバッファーして、評価中に外部から変更されないように分離します。    バッファー処理は浅いものです。スカラー セルのすべての値は強制的に評価されますが、スカラー値以外の値 (レコード、リスト、テーブルなど) はそのままにされます。    <br />    <br />    この関数を使用すると、クエリの実行が速くなる場合とそうでない場合があることに注意してください。場合によっては、すべてのデータを読み取ってメモリに格納するための    コストが追加され、バッファー処理によって下流のフォールディング処理が妨げられるため、クエリの実行が遅くなる場合があります。データをバッファーする必要がないが    単に下流のフォールディング処理を妨げたい場合は、<code>Table/StopFolding</code> を代わりに使用します。


## Examples

### Example #1 
SQL テーブルのすべての行をメモリに読み込むと、ダウンストリーム操作で SQL サーバーのクエリを実行できなくなります。
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
