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

テーブルをメモリ内にバッファー処理して、評価中に外部の変更から分離します。 バッファー処理はシャローです。スカラー セル値は強制的に評価されますが、非スカラー値 (レコード、リスト、テーブルなど) はそのまま残ります。

-   `table`: メモリ内でにバッファー処理するテーブル。
-   `options`: (省略可能) 次のオプションのレコード値を使用できます:
    -   `BufferMode`: 実行するバッファリングの種類を記述するバッファー モード。このオプションは、`BufferMode.Eager` または `BufferMode.Delayed` のいずれかです。

この関数を使用すると、クエリの実行速度が速くなる場合とそうでない場合があります。場合によっては、クエリの実行が遅くなる可能性があります。 これは、すべてのデータを読み取ってメモリに格納するコストの増加と、バッファリングによってダウンストリーム フォールディングが防止されることが原因です。データをバッファー処理する必要はないが、 ダウンストリーム フォールディングのみを防止したい場合は、代わりに `Table.StopFolding` を使用します。


## Examples

### Example #1
SQL テーブルのすべての行をメモリに読み込むと、ダウンストリーム操作で SQL サーバーのクエリを実行できなくなります。
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
