---
title: DateTime.LocalNow
---

# DateTime.LocalNow


返回采用本地时区的当前日期和时间。


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

返回设置为系统上当前日期和时间的 `日期时间` 值。  
  
此函数返回的值取决于你是在本地计算机上运行查询还是在联机运行查询。例如，如果在位于美国太平洋时区的系统上运行查询，Power Query桌面会返回在本地计算机上设置的日期和时间。但是，如果在云上运行查询，Power Query Online 返回 UTC 时间，因为它正在读取云虚拟机上设置的时间，这些时间都设置为 UTC。


## Examples

### Example #1
在运行Power Query桌面的本地计算机上调用此函数。
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
在运行Power Query Online 的云上调用此函数。
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
