---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


ローカル タイム ゾーンでの現在の日付と時刻を返します。この値は固定されているため、連続呼び出しでは変更されません。


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

システムの現在の日付と時刻に設定された <code>datetime</code> 値を返します。返された値には、ローカル タイム ゾーンを表すタイム ゾーン情報が含まれています。この値は固定されているため、DateTimeZone.LocalNow とは異なり、連続呼び出しでは変更されません。これにより、式の実行中に異なる値が返される可能性があります。



## Category
DateTimeZone
