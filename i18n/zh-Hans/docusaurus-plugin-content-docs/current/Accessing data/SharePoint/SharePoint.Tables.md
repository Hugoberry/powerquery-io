---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

返回一个包含 SharePoint 列表内容的表。


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

返回包含在指定 SharePoint 列表 <code>url</code> 上找到的每个列表项的行的表。每行都包含该列表的属性。可以指定 <code>options</code> 以控制以下选项:    <ul><li><code>ApiVersion</code> : 数字(14 或 15)或文本 &quot;Auto&quot;，指定要用于此站点的 SharePoint API 版本。未指定时，使用 API 版本 14。指定 Auto 时，如果可能将自动发现服务器版本，否则版本默认为 14。非英文的 SharePoint 网站至少需要版本 15。</li><li><code>Implementation</code> : 可选。指定要使用的 SharePoint 连接器版本。接受的值为 “2.0” 或 null。如果值为 “2.0”，则使用 SharePoint 连接器的 2.0 实现。如果值为 null，则使用 SharePoint 连接器的原始实现。</li><li><code>ViewMode</code> : 可选。此选项仅对实现 2.0 有效。接受的值为“全部”和“默认”。如果未指定任何值，则该值设置为“全部”。指定“全部”后，视图将包括用户创建的所有列和系统定义的列。指定“默认”时，视图将与用户在其设置中设置为“默认”的任何视图中在线查看列表时所看到的内容相匹配。。如果用户编辑其默认视图以添加或移除用户创建的列或系统定义的列，或者通过创建新视图并将其设置为默认视图，则这些更改将通过连接器传播。</li><li><code>DisableAppendNoteColumns</code> : 阻止连接器对注释列使用单独的终结点。</li></ul>    



## Category
Accessing data
