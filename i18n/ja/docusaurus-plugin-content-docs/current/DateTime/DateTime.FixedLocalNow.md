---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


## Description

ローカル タイム ゾーンでの現在の日付と時刻を返します。この値は固定されているため、連続呼び出しでは変更されません。


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Details

システムの現在の日付と時刻に設定された <code>datetime</code> 値を返します。この値は固定されているため、DateTime.LocalNow とは異なり、連続呼び出しでは変更されません。これにより、式の実行中に異なる値が返される可能性があります。



## Category
DateTime
