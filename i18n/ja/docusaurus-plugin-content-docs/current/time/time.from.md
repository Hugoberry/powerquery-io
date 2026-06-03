---
title: Time.From
---

# Time.From


指定された値から時刻を作成します。


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

指定された `value` から `time` 値を返します。省略可能な `culture` を指定することもできます (例: "en-US")。 指定された `value` が `null` の場合、`Time.From` は `null` を返します。指定された `value` が `time` の場合、`value` が返されます。次の型の値を `time` 値に変換できます:

-   `text`: テキスト形式の表記からの `time` 値。詳細については `Time.FromText` を参照してください。
-   `datetime`: `value` の時刻部分。
-   `datetimezone`: `value` に相当するローカル datetime の時刻部分。
-   `number`: `value` で表される小数の日数に相当する `time`。`value` が負の値か、1 以上の場合は、エラーが返されます。

`value` が他の型の場合、エラーが返されます。


## Examples

### Example #1
`0.7575` を `time` 値に変換します。
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
`#datetime(1899, 12, 30, 06, 45, 12)` を `time` 値に変換します。
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
