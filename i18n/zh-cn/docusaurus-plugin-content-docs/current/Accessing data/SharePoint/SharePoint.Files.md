---
title: SharePoint.Files
---

# SharePoint.Files


## Description

返回一个包含 SharePoint 站点文档的表。


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Details

返回包含在指定 SharePoint 站点 <code>url</code> 上找到的每个文档和子文件夹的行的表。每行都包含该文件夹或文件的属性以及指向其内容的链接。可以指定 <code>options</code> 以控制以下选项:    <ul><li><code>ApiVersion</code> : 数字(14 或 15)或文本 &quot;Auto&quot;，指定要用于此站点的 SharePoint API 版本。未指定时，使用 API 版本 14。指定 Auto 时，如果可能将自动发现服务器版本，否则版本默认为 14。非英文的 SharePoint 网站至少需要版本 15。</li></ul>    



## Category
Accessing data
