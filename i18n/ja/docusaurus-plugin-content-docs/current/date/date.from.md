---
title: Date.From
---

# Date.From


指定された値から日付を作成します。


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

指定された値から日付値を返します。

-   `value`: 日付に変換する値。指定された値が `null` の場合、この関数は `null` を返します。指定された値が `date` の場合は、`value` が返されます。次の型の値は、`date` 値に変換できます:
    -   `text`: テキスト形式の表記からの `date` 値。詳細については、`Date.FromText` を参照してください。
    -   `datetime`: `value` の日付コンポーネント。
    -   `datetimezone`: `value` に相当するローカル datetime の日付コンポーネント。
    -   `number`: 浮動小数点数に相当する datetime の日付コンポーネント。整数部は 1899 年 12 月 30 日の午前 0 時前後の日数を表し、小数部はその日の時刻を 24 で割った値を表します。たとえば、1899 年 12 月 31 日の午前 0 時は 1.0、1900 年 1 月 1 日の午前 6 時は 2.25、1899 年 12 月 29 日の午前 0 時は -1.0、1899 年 12 月 29 日の午前 6 時は -1.25 で表されます。基準値は 1899 年 12 月 30 日の午前 0 時です。最小値は 0100 年 1 月 1 日の午前 0 時です。最大値は 9999 年 12 月 31 日の最後の瞬間です。
    -   `value` が他の型の場合は、エラーが返されます。
-   `culture`: 指定された値のカルチャ (例: "en-US")。


## Examples

### Example #1
指定した日付と時刻を日付値に変換します。
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
指定した数値を日付値に変換します。
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
\[投稿日\] 列のドイツ語のテキストの日付を日付値に変換します。
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
