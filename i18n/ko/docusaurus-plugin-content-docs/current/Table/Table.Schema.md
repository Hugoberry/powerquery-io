---
title: Table.Schema
---

# Table.Schema


## Description

지정한 테이블의 열 설명(예: 스키마)을 포함하는 테이블을 반환합니다.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

<code>table</code> 열을 설명하는 테이블을 반환합니다.<br />테이블의 각 행은 <code>table</code> 열의 속성을 설명합니다.<br /><table>  <tr>    <td><b>열 이름</b></td>    <td><b>설명</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>열 이름입니다.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td><code>table</code>에서 열의 0 기준 위치입니다.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>열 형식의 이름입니다.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>열 형식의 종류입니다.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>열에 <code>null</code> 값을 포함할 수 있는지 여부를 나타냅니다.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td><code>NumericPrecision</code> 및 <code>NumericScale</code> 필드의 숫자 base(예: base-2, base-10)입니다.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td><code>NumericPrecisionBase</code>가 지정한 base에서 숫자 열의 정밀도입니다. 이 형식의 값이 표현할 수 있는 최대 자릿수입니다(소수 자리 포함).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td><code>NumericPrecisionBase</code>가 지정한 base에서 숫자 열의 소수 자릿수입니다. 이러한 형식의 값에서 소수부의 자릿수를 의미합니다. <code>0</code> 값은 소수 자리가 없는 고정 크기를 나타냅니다. <code>null</code> 값은 알 수 없는 크기를 나타냅니다(부동이거나 정의되지 않은 경우도 있음).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>날짜 또는 시간 값의 초 부분에서 지원되는 최대 소수 자릿수입니다.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td><code>text</code> 열에 허용된 최대 문자 수이거나 <code>binary</code> 열에 허용된 최대 바이트 수입니다.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>이 열의 길이가 달라질 수 있는지(최대 <code>MaxLength</code>) 또는 고정 크기인지를 나타냅니다.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>원본 네이티브 형식 시스템에서 열 형식의 이름입니다(예: SQL Server에 대한 <code>nvarchar</code>).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>원본의 네이티브 식 언어에서 이 열 값에 대한 기본 식입니다(예: SQL Server에 대한 <code>42</code> 또는 <code>newid()</code>).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>열의 설명입니다.</td>  </tr></table><br />



## Category
Table.Information
