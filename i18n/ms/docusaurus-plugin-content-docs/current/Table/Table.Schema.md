---
title: Table.Schema
---

# Table.Schema


## Description

Mengembalikan jadual yang mengandungi perihalan lajur (cth. skema) jadual yang ditentukan.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Mengembalikan jadual yang menerangkan lajur <code>table</code>.<br />Setiap baris dalam jadual menerangkan sifat lajur <code>table</code>:<br /><table>  <tr>    <td><b>Nama Lajur</b></td>    <td><b>Perihalan</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Nama lajur.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>Kedudukan asas 0 bagi lajur dalam <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Nama jenis lajur.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Golongan jenis lajur.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Sama ada lajur boleh mengandungi nilai <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Asas angka (contohnya, asas 2 atau asas 10) bagi medan <code>NumericPrecision</code> dan <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Ketepatan lajur angka dalam asas yang ditentukan oleh <code>NumericPrecisionBase</code>. Ini ialah bilangan digit maksimum yang boleh diwakili oleh nilai bagi jenis ini (termasuk digit pecahan).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Skala lajur angka dalam asas yang ditentukan oleh <code>NumericPrecisionBase</code>. Ini ialah bilangan digit dalam bahagian pecahan nilai bagi jenis ini. Nilai <code>0</code> menunjukkan skala tetap tanpa digit pecahan. Nilai <code>null</code> menunjukkan skala tidak diketahui (sama ada kerana ia terapung atau tidak ditentukan).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Bilangan digit pecahan maksimum yang disokong dalam bahagian saat bagi nilai tarikh atau masa.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Bilangan aksara maksimum yang dibenarkan dalam lajur <code>text</code>, atau bilangan bait maksimum yang dibenarkan dalam lajur <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Menunjukkan sama ada lajur ini boleh berbeza-beza dalam ukuran panjang (sehingga <code>MaxLength</code>) atau jika ia bersaiz tetap.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Name jenis lajur dalam sistem jenis natif bagi sumber (contohnya, <code>nvarchar</code> untuk SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Ungkapan lalai untuk nilai lajur ini dalam bahasa ungkapan natif sumber (contohnya, <code>42</code> atau <code>newid()</code> untuk SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Perihalan lajur.</td>  </tr></table><br />



## Category
Table.Information
