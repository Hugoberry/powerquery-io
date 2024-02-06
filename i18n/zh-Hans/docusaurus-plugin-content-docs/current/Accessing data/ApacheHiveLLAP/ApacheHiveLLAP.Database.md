---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


从 Hive LLAP 导入数据


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

使用所选的<code>协议</code>从 Hive LLAP <code>服务器</code>上的<code>数据库</code>指定的 Hive LLAP 返回表格列表。端口可以视情况使用服务器进行指定，并用冒号分隔。Thrift 传输协议是枚举类型，其值为 "Standard"、"HTTP"。可以指定可选的 <code>options</code> 参数来控制以下选项:<ul>        <li><code>ConnectionTimeout</code>: 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。</li>        <li><code>CommandTimeout</code>: 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值与驱动程序相关。</li></ul>将 <code>options</code> 参数指定为 [option1 = value1, option2 = value2...]。


