---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

从 HDInsight Interactive Query 导入数据


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

从 HDInsight Interactive Query<code>服务器</code>上的<code>数据库</code>指定的 HDInsight Interactive Query 中返回表列表。可以视需要指定服务器的端口，并用冒号分隔。可以指定可选的 <code>options</code> 参数来控制以下选项:<ul>        <li><code>ConnectionTimeout</code>: 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。</li>        <li><code>CommandTimeout</code>: 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值与驱动程序相关。</li></ul>将 <code>options</code> 参数指定为 [option1 = value1, option2 = value2...]。


