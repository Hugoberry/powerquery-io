---
title: Excel.Workbook
---

# Excel.Workbook


返回 Excel 工作簿的内容。


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

返回 Excel 工作簿的内容。    <ul>     <li> <code>useHeaders</code> 可为 null、指示是否应将每个返回表的第一行视为标题的逻辑值(true/false)，或选项记录。默认值: false。</li>     <li> <code>delayTypes</code> 可为 null 或逻辑值(true/false)，其中逻辑值表示每个返回的表的列是否应保留未设类型的状态。默认值: false。</li>    </ul>    如果为 <code>useHeaders</code> 指定了记录(且 <code>delayTypes</code> 为 null)，则可能提供以下记录字段:    <ul>     <li> <code>UseHeaders</code>: 可为 null 或指示是否应将每个返回表的第一行视为标题的逻辑值(true/false)。默认值: false。</li>     <li> <code>DelayTypes</code>: 可为 null 或逻辑值(true/false)，其中逻辑值表示每个返回的表的列应保留未设类型的状态。默认值: false。</li>     <li> <code>InferSheetDimensions</code>: 可为 null 或逻辑值(true/false)，其中逻辑值表示包含数据的工作表的区域应通过读取工作表本身进行推断，而不是通过读取文件中的维度元数据。如果维度元数据不正确，那么这非常有用。请注意，仅支持对 Open XML Excel 文件使用此选项，不可用于旧版 Excel 文件。默认值: false。</li>    </ul>    


## Examples

### Example #1 
从 Excel 工作簿返回 Sheet1 的内容。
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
