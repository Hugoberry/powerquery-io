---
title: DateTime.From
---

# DateTime.From


指定された値から datetime を作成します。


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

指定された `value` から `datetime` 値を返します。省略可能な `culture` を指定することもできます (例: "en-US")。 指定された `value` が `null` の場合、`DateTime.From` は `null` を返します。指定された `value` が `datetime` の場合、`value` が返されます。次の型の値を `datetime` 値に変換できます:

-   `text`: テキスト形式の表記からの `datetime` 値。詳細については `DateTime.FromText` を参照してください。
-   `date`: 日付部分が `value`、時刻部分が `12:00:00 AM` の `datetime`。
-   `datetimezone`: `value` に相当するローカルの `datetime`。
-   `time`: 日付部分が `0`、時刻部分が `value` の OLE オートメーション日付に相当する日付 の `datetime`。
-   `number`: `value` で表される OLE オートメーション日付に相当する `datetime`。

`value` が他の型の場合、エラーが返されます。


## Examples

### Example #1
`#time(06, 45, 12)` を `datetime` 値に変換します。
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
`#date(1975, 4, 4)` を `datetime` 値に変換します。
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
