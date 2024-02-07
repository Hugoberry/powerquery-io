---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


指定された datetimezone 値からタイム ゾーン情報を削除します。


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

<code>dateTimeZone</code> からタイム ゾーン情報が削除された #datetime 値を返します。


## Examples

### Example #1 
値 #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0) からタイム ゾーン情報を削除します。
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
