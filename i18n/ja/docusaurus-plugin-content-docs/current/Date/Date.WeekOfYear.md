---
title: Date.WeekOfYear
---

# Date.WeekOfYear


この日付が年のどの週に該当するかを示す、1 ～ 54 の数値を返します。


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

日付 <code>dateTime</code> が年内のどの週に該当するかを示す 1 から 54 の数値を返します。 <ul>        <li><code>dateTime</code>: 年内の週を特定する対象の <code>datetime</code> 値。</li>        <li><code>firstDayOfWeek</code>: どの曜日を新しい週の開始と見なすかを示す省略可能な <code>Day.Type</code> 値 (例: <code>Day.Sunday</code>)。指定しない場合、カルチャに依存する既定値が使用されます。</li>      </ul>


## Examples

### Example #1 
2011 年 3 月 27 日が年内のどの週に該当するかを特定します。
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
週の始まりに月曜日を使用して、2011 年 3 月 27 日が年内のどの週に該当するかを特定します。
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
