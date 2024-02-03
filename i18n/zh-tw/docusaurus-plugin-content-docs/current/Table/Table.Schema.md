---
title: Table.Schema
---

# Table.Schema


## Description

傳回包含指定的資料表之資料行 (例如結構描述) 說明的資料表。


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

傳回描述 <code>table</code> 資料行的資料表。<br />資料表中的每一個資料列都描述 <code>table</code> 資料行的屬性:<br /><table>  <tr>    <td><b>資料行名稱</b></td>    <td><b>描述</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>資料行的名稱。</td>  </tr>  <tr>    <td><code>Position</code></td>    <td><code>table</code> 中資料行從 0 開始的位置。</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>資料行類型的名稱。</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>資料行類型的種類。</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>資料行是否可以包含 <code>null</code> 值。</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td><code>NumericPrecision</code> 與 <code>NumericScale</code> 欄位的數值進制 (例如，二進制、十進制)。</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>使用 <code>NumericPrecisionBase</code> 所指定的進制時數值資料行的有效位數。這是此類型值所能代表的位數上限 (包含小數位數)。</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>使用 <code>NumericPrecisionBase</code> 所指定的進制時數值資料行的小數位數。這是此類型值在小數點後的位數。值 <code>0</code> 表示沒有固定的小數位數。值 <code>null</code> 表示小數位數不明 (有可能因為是浮點或未定義)。</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>在日期或時間值的秒數部分，所支援的小數位數數目上限。</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td> <code>text</code> 資料行中所允許的字元數上限，或是 <code>binary</code> 資料行中所允許的位元組數目上限。</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>指出此資料行的長度是否可以有所變化 (最長可以到 <code>MaxLength</code>)，或其為固定大小。</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>來源的原生類型系統中資料行的類型名稱 (例如，<code>nvarchar</code> 用於 SQL Server)。</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>來源的原生運算式語言中此資料行值的預設運算式 (例如，<code>42</code> 或 <code>newid()</code> 用於 SQL Server)。</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>資料行的描述。</td>  </tr></table><br />



## Category
Table.Information
