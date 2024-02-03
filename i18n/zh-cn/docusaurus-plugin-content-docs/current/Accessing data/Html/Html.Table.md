---
title: Html.Table
---

# Html.Table


## Description

返回一个表，该表包含针对提供的 HTML 运行指定 CSS 选择器的结果。


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

返回一个表，其中包含针对所提供的 <code>html</code> 运行指定 CSS 选择器的结果。可提供可选的记录参数 <code>options</code> 来指定附加属性。此记录可包含以下字段:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
从示例 html 文本值返回一个表。
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
从示例 html 文本值中提取所有 href。
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
正在访问数据
