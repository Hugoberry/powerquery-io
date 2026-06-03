---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


指定された関数を使用して列の名前を変換します。


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

与えられた `nameGenerator` 関数を使用して列の名前を変換します。有効なオプション:

`MaxLength` は新規の列名の最大長を指定します。与えられた関数の結果が、これより長い列名になる場合、その長い名前はトリミングされます。

`Comparer` は、新しい列名を生成するとき、比較を制御します。比較関数を使用すると、大文字小文字を区別しない比較、およびカルチャとロケールに対応した比較を行えます。

命令文で以下の標準で用意された比較関数を使用できます。

-   `Comparer.Ordinal`: 完全一致の順次比較を行います
-   `Comparer.OrdinalIgnoreCase`: 完全一致の順次比較 (大文字小文字を区別しない) を行います
-   `Comparer.FromCulture`: カルチャに対応した比較を行います


## Examples

### Example #1
列の名前から `#(tab)` 文字を削除する
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
列名を変換して、長さ 6 文字の大文字小文字を区別しない名前を生成します。
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
