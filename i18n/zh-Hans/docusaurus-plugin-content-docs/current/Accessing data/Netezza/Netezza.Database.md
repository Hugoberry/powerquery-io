---
title: Netezza.Database
---

# Netezza.Database


从 IBM Netezza 数据库导入数据。


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

从服务器 <code>server</code> 上的 Netezza 服务器数据库 <code>database</code> 中返回 Netezza 表、视图和存储函数的表。可根据需要指定服务器的端口，并用冒号分隔。可以指定可选的记录参数 <code>options</code> 来控制以下选项:<ul>        <li><code>CreateNavigationProperties</code>: 一个逻辑值(true/false)，用于设置是否在返回的值上生成导航属性(默认值为 true)</li>        <li><code>HierarchicalNavigation</code>: 一个逻辑值(true/false)，用于设置是否查看按架构名称分组的表(默认值为 false)</li>        <li><code>ConnectionTimeout</code>: 一个时间段，用于控制在放弃尝试与服务器建立连接之前等待的时间。默认值与驱动程序相关。</li>        <li><code>CommandTimeout</code>: 一个时间段，用于控制在取消服务器端查询之前允许该查询运行的时间。默认值与驱动程序相关。</li><li><code>NormalizeDatabaseName</code>: 一个逻辑值(true/false)，用于设置是否将数据库名称规范化为大写或按字面意义解释(默认值为 true)</li></ul>将记录参数指定为 [option1 = value1, option2 = value2...]。


## Examples

### Example #1 
列出 IBM Netezza 项目中的表。
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



