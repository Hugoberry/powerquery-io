---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


値のタイムゾーンの時間を取得します。


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

`datetimezone` 値のタイム ゾーン時間コンポーネントを返します。

-   `dateTimeZone`: タイム ゾーン時間コンポーネントの抽出元となる `datetimezone` 値。`dateTimeZone` が `null` の場合、関数は `null` を返します。


## Examples

### Example #1
指定された `datetimezone` 値のタイム ゾーン時間コンポーネントを取得します。
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
