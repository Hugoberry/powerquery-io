---
title: Csv.Document
---

# Csv.Document


## Description

返回 CSV 文档的内容作为表。


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Details

以表的形式返回 CSV 文档的内容。    <ul>      <li>        <code>columns</code> 可以为 null、列数、列名称的列表、表类型或选项记录。      </li>      <li>        <code>delimiter</code> 可以是单个字符、字符的列表，或值 <code>""</code>，表示应使用连续空格字符拆分行。默认值: <code>“,”</code>。      </li>      <li>        请参考 <code>ExtraValues.Type</code> 以了解 <code>extraValues</code> 的受支持的值。      </li>      <li>        <code>encoding</code> 指定文本编码类型。      </li>    </ul>    如果为 <code>columns</code> 指定了记录(且 <code>delimiter</code>、<code>extraValues</code> 和 <code>encoding</code> 为 null)，则可能提供以下记录字段:    <ul>      <li>        <code>Delimiter</code>: 列分隔符。默认值: <code>“,”</code>。      </li>      <li>        <code>Columns</code>: 可以为 null、列数、列名称的列表或表类型。如果列数小于输入中发现的数字，则忽略其他列。如果列数大于输入中发现的数字，则其他列将为 null。如果未指定，则列数将由输入中发现的数字决定。      </li>      <li>        <code>Encoding</code>: 文件的文本编码。默认值: 65001 (UTF-8)。      </li>      <li>        <code>CsvStyle</code>: 指定引号的处理方式。        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (默认值): 字段中的引号仅在紧跟分隔符后才起作用。          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: 字段中的引号始终起作用，无论它们出现在什么位置。          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: 指定带引号换行符的处理方式。        <ul>          <li>            <code>QuoteStyle.None</code> (默认值): 将所有换行符视为当前行的末尾，即使它们出现在带引号的值内也是如此。          </li>          <li>            <code>QuoteStyle.Csv</code>: 将带引号的换行符视为数据的一部分，而不是当前行的末尾。          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
处理包含列标题的 CSV 文本
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```




## Category
Accessing data
