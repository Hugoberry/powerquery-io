---
title: Table.Schema
---

# Table.Schema


## Description

指定したテーブルの列の説明 (つまりスキーマ) を含むテーブルを返します。


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

<code>table</code> の列を説明するテーブルを返します。<br />テーブル内の各行は、<code>table</code> の列のプロパティを説明しています:<br /><table>  <tr>    <td><b>Clumn Name</b></td>    <td><b>説明</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>列の名前。</td>  </tr>  <tr>    <td><code>Position</code></td>    <td><code>table</code> 内の列の 0 ベースの位置。</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>列の種類の名前。</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>列型の種類。</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>列に<code>null</code> 値を含められるかどうか。</td>  </tr>  <tr>   <td><code>NumericPrecisionBase</code></td>    <td><code>NumericPrecision</code> および <code>NumericScale</code> フィールドの数値の進法 (2 進法、10 進法など)。</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td><code>NumericPrecisionBase</code> によって指定された進法表記での数値列の精度。この種類の値 (小数部分の桁数を含む) によって表せる最大桁数を表します。</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td><code>NumericPrecisionBase</code> によって指定された進法表記での数値列の桁数。この種類の値の小数部分の桁数を表します。値 <code>0</code> は、小数桁を持たない固定桁を表します。値 <code>null</code> は、浮動小数か未定義であるため、桁数が不明であることを表します。</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>date 値または time 値の seconds 部分でサポートされる小数の最大桁数。</td>  </tr>  <tr>    <td><code>MaxLength</code></td>   <td><code>text</code> 列で使用できる最大文字数、または <code>binary</code> 列で使用できる最大バイト数。</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>その列の長さが可変 (上限 <code>MaxLength</code>) であるか、固定サイズであるか。</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>ソースのネイティブ型システム内の列の種類の名前 (例: SQL Server の場合、<code>nvarchar</code>)。</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>ソースのネイティブな記述言語で表記した場合のこの列の値の既定の表記 (例: SQL Server の場合、<code>42</code> または <code>newid()</code>)。</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>列の説明。</td>  </tr></table><br />



## Category
Table.Information
