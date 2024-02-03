---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


## Description

返回采用本地时区的当前日期和时间。该值是固定的，因此将不会随着连续调用而更改。


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Details

返回设置为系统上的当前日期和时间的 <code>datetime</code> 值。该值是固定的，因此将不会随着连续调用而更改，这与 DateTime.LocalNow 不同，后者可能会在表达式的执行过程中返回不同值。



## Category
DateTime
