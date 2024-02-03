---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


## Description

傳回本地時區的目前日期與時間。這個值是固定的，不會因為連續呼叫而變更。


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Details

傳回 <code>datetime</code> 值，設為系統的目前日期和時間。這個值是固定的，不會因為連續呼叫而變更，而 DateTime.LocalNow 則不同，它在運算式的執行過程中可能傳回不同值。



## Category
DateTime
