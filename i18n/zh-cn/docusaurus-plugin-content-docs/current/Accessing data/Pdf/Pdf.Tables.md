---
title: Pdf.Tables
---

# Pdf.Tables


## Description

返回在 PDF 文件中找到的任何表。


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

返回在 <code>pdf</code> 中找到的任何表。可提供可选记录参数 <code>options</code>，以指定其他属性。记录可包含以下字段:    <ul><li><code>Implementation</code> : 标识表时要使用的算法版本。旧版本仅用于向后兼容，以防止算法更新终端旧的查询。最新版本应始终提供最佳结果。有效值为 &quot;1.3&quot;、&quot;1.2&quot;、&quot;1.1&quot; 或 null。</li><li><code>StartPage</code> : 指定页范围中要检查的第一页。默认值: 1。</li><li><code>EndPage</code> : 指定页范围中要检查的最后一页。默认值:文档的最后一页。</li><li><code>MultiPageTables</code> : 控制是否将连续页面上的相似表自动合并为一个表。默认值: true。</li><li><code>EnforceBorderLines</code> : 控制是否始终将边界线强制用作单元格边界(若为 true)，或仅用作确定单元格边界的许多提示之一(若为 false)。默认值: false。</li></ul>


## Examples

### Example #1 
返回 sample.pdf 中的表。
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
访问数据
