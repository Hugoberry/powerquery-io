---
title: Table.Schema
---

# Table.Schema


返回一个表，该表包含指定表的列的描述(即架构)。


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Remarks

返回一个表，该表描述 <code>table</code> 的列。<br />该表中的各行分别描述 <code>table</code> 的某一列的属性:<br /><table>  <tr>    <td><b>列名</b></td>    <td><b>描述</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>该列的名称。</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>该列在 <code>table</code> 中的位置(从 0 开始)。</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>该列的类型名称。</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>该列的类型种类。</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>该列是否可以包含 <code>null</code> 值。</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td><code>NumericPrecision</code> 和 <code>NumericScale</code> 字段的数值基数(例如，base-2、base-10)。</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td><code>NumericPrecisionBase</code> 指定的基数中数值列的精度。这是此类型的值可以表示的最大位数(包括小数位)。</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td><code>NumericPrecisionBase</code> 指定的基数中数值列的位数。这是此类型的值的小数部分的位数。值 <code>0</code> 指示不带小数位的固定位数。值 <code>null</code> 指示位数未知(因为它是浮点数或未定义)。</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>日期或时间值的秒部分支持的最大小数位数。</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td><code>text</code> 列中允许的最大字符数，或 <code>binary</code> 列中允许的最大字节数。</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>指示此列的长度可变(长达 <code>MaxLength</code>)还是为固定大小。</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>该列在源的本机类型系统中的类型名称(例如，在 SQL Server 中为 <code>nvarchar</code>)。</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>此列的值在源的本机表达式语言中的默认表达式(例如，在 SQL Server 中为 <code>42</code> 或 <code>newid()</code>)。</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>该列的描述。</td>  </tr></table><br />



## Category
Table.Information
