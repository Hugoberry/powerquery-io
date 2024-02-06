---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


タイム ゾーン部分を UTC タイム ゾーンに変換します。


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

datetime 値 <code>dateTimeZone</code> のタイム ゾーン情報を UTC またはグリニッジ標準時タイム ゾーン情報に変更します。    <code>dateTimeZone</code> にタイム ゾーン部分がない場合は、UTC タイム ゾーン情報が追加されます。


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) のタイム ゾーン情報を UTC タイム ゾーンに変更します。
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
