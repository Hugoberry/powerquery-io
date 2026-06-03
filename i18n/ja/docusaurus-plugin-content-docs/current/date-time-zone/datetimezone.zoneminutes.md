---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


値のタイム ゾーン分を取得します。


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

'datetimezone' 値のタイム ゾーンの分コンポーネントを返します。

-   `dateTimeZone`: タイム ゾーンの分コンポーネントの抽出元となる `datetimezone` 値。`dateTimeZone` が `null` の場合、関数は `null` を返します。


## Examples

### Example #1
指定された 'datetimezone' 値のタイム ゾーン分コンポーネントを取得します。
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
