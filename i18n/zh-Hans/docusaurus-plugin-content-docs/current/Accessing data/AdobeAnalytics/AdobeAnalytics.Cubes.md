---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


在 Adobe Analytics 中返回报表套件。


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

从 Adobe Analytics 返回多维包的表。可以指定可选的记录参数 <code>options</code> 来控制以下选项:    <ul><li><code>HierarchicalNavigation</code> : 一个逻辑值(true/false)，用于设置是否查看按架构名称分组的表(默认值为 false)。</li><li><code>MaxRetryCount</code> : 在轮询查询的结果时要执行的重试次数。默认值为 120。</li><li><code>RetryInterval</code> : 重试尝试之间的持续时间。默认值为 1 秒。</li><li><code>Implementation</code> : 指定 Adobe Analytics API 版本。有效值为: “2.0”。默认使用 API 版本 1.4。</li></ul>    



## Category
Accessing data
