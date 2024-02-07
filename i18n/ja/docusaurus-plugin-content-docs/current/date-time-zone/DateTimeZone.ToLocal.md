---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


タイム ゾーン部分をローカル タイム ゾーンに変換します。


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

datetimezone 値 <code>dateTimeZone</code> のタイム ゾーン情報をローカル タイム ゾーン情報に変更します。    <code>dateTimeZone</code> にタイム ゾーン部分がない場合は、ローカル タイム ゾーン情報が追加されます。


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) のタイム ゾーン情報をローカル タイム ゾーン (PST を想定) に変更します。
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
