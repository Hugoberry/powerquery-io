---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


指定された列を新しいレコード値の列に結合します。各レコードは、結合された列の名前と列の値に対応するフィールド名と値になります。


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

指定された <code>table</code> の列を <code>newColumnName</code> という名前の新しいレコード値の列に結合します。各レコードには、結合された列の列名と値に対応するフィールド名と値があります。<code>options</code> にレコードが指定されると、次のオプションを指定できます:    <ul>     <li> <code>DisplayNameColumn</code>: テキストとして指定された場合、指定された列名がレコードの表示名として扱われることを示します。これは、レコード自体に含まれる列の 1 つである必要はありません。</li>     <li> <code>TypeName</code>: テキストとして指定された場合、結果として得られるレコードの論理型名となります。これは、データの読み込み中に、読み込み環境による動作を促進するために使用できます。</li>    </ul>    



## Category
Table.Transformation
