---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


値のタイム ゾーンを変更します。


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

datetimezone 値 `dateTimeZone` のタイム ゾーン情報を、`timezoneHours` および任意で `timezoneMinutes` によって指定された新しいタイム ゾーン情報に変更します。 `dateTimeZone` にタイムゾーン コンポーネントがない場合は、エラーが発生します。


## Examples

### Example #1
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) のタイム ゾーン情報を 8 時間に変更します。
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) のタイム ゾーン情報を -30 分に変更します。
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
