---
title: SharePoint.Contents
---

# SharePoint.Contents


返回一个包含 SharePoint 站点内容的表。


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

返回包含在指定 SharePoint 站点 `url` 上找到的每个文件夹和文档的行的表。每行都包含该文件夹或文件的属性以及指向其内容的链接。可以指定 `options` 以控制以下选项:

-   `ApiVersion` : 数字(14 或 15)或文本 "Auto"，指定要用于此站点的 SharePoint API 版本。未指定时，使用 API 版本 14。指定 Auto 时，如果可能将自动发现服务器版本，否则版本默认为 14。非英文的 SharePoint 网站至少需要版本 15。
-   `Implementation` : 可选。指定要使用的 SharePoint 连接器版本。接受的值为 “2.0” 或 null。如果值为 “2.0”，则使用 SharePoint 连接器的 2.0 实现。如果值为 null，则使用 SharePoint 连接器的原始实现。



## Category
Accessing data
