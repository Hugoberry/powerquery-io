---
title: Table.Schema
---

# Table.Schema


## Description

Belirtilen tablodaki sütun açıklamalarının (örneğin, şema) yer aldığı bir tablo döndürür.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

<code>table</code> sütunlarını tanımlayan bir tablo döndürür.<br />Tablodaki her satır bir <code>table</code> sütununun özelliklerini tanımlar:<br /><table>  <tr>    <td><b>Sütun Adı</b></td>    <td><b>Açıklama</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Sütunun adı.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td><code>table</code> içindeki sütunun 0 tabanlı konumu.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Sütun türünün adı.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Sütun türünün tipi.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Sütunun <code>null</code> değer içerip içeremeyeceğini gösterir.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td><code>NumericPrecision</code> ve <code>NumericScale</code> alanlarının sayısal tabanı (ör. 2 tabanlı, 10 tabanlı).</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Sayısal bir sütunun <code>NumericPrecisionBase</code> tarafından belirtilen tabandaki duyarlığı. Bu, bu türe sahip (kesirli sayılar dahil ) bir değer tarafından temsil edilebilecek maksimum basamak sayısıdır.</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Sayısal bir sütunun <code>NumericPrecisionBase</code> tarafından belirtilen tabandaki ölçeği. Bu, bu türe sahip bir kesir parçasındaki basamak sayısıdır. <code>0</code> değeri, hiç kesirli sayının olmadığı sabit bir ölçeği ifade eder. <code>null</code> değeri, (kayan bir değer olduğu için veya tanımlanmadığı için) ölçeğin bilinmediğini ifade eder.</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Bir tarih veya saat değerinin saniyelik kısmında desteklenen maksimum kesirli basamak sayısı.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td><code>text</code> sütununda izin verilen maksimum karakter sayısı veya bir <code>binary</code> sütununda izin verilen maksimum bayt sayısı.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Bu sütunun uzunluğunun değişip değişemeyeceğini (<code>MaxLength</code> değerine kadar) veya sabit boyutlu olup olmadığını gösterir.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Sütun türünün kaynağın yerel tür sistemindeki adı (ör. SQL Server için <code>nvarchar</code>).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Bu sütunun bir değeri için kaynağın yerel ifade dilindeki varsayılan ifade (ör. SQL Server için <code>42</code> veya <code>newid()</code>).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Sütun açıklaması.</td>  </tr></table><br />



## Category
Table.Information
