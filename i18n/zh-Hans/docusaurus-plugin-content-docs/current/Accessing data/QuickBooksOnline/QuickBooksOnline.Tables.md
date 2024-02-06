---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


从 QuickBooks Online 导入数据。


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Remarks

      返回列出 QuickBooks Online 中可用表的表。可指定可选记录参数 <code>options</code> 来控制以下选项:      <ul>        <li><code>ConnectionTimeout</code>:时间段，控制在放弃尝试与服务器建立连接之前等待的时间。</li>        <li><code>CommandTimeout</code>:时间段，控制服务器端查询在取消之前可运行的时间。</li>          </ul>        可以将记录参数指定为 [option1 = value1, option2 = value2...]。    


