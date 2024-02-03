---
title: Table.Schema
---

# Table.Schema


## Description

Menghasilkan tabel yang berisi deskripsi kolom (misalnya, skema) tabel tertentu.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Menghasilkan tabel yang mendeskripsikan kolom <code>table</code>.<br />Setiap baris dalam tabel mendeskripsikan properti kolom <code>table</code>:<br /><table>  <tr>    <td><b>Nama Kolom</b></td>    <td><b>Deskripsi</b></td>  </tr>  <tr>    <td><code>Nama</code></td>    <td>Nama Kolom.</td>  </tr>  <tr>    <td><code>Posisi</code></td>    <td>Posisi berbasis 0 kolom di <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Nama tipe kolom.</td>  </tr>  <tr>    <td><code>Jenis</code></td>    <td>Jenis tipe kolom.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Apakah kolom dapat berisi nilai <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Basis numerik (misalnya, basis-2 atau basis-10) dari bidang <code>NumericPrecision</code> dan <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Presisi kolom numerik dalam basis yang ditentukan oleh <code>NumericPrecisionBase</code>. Ini adalah jumlah digit maksimum yang dapat direpresentasikan oleh nilai jenis ini (termasuk digit pecahan).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Skala kolom numerik dalam basis yang ditentukan oleh <code>NumericPrecisionBase</code>. Ini adalah jumlah digit di bagian pecahan nilai tipe ini. Nilai <code>0</code> menunjukkan skala tetap tanpa digit pecahan. Nilai <code>null</code> menunjukkan skala tidak diketahui (karena mengambang atau tidak ditentukan).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Jumlah maksimum digit pecahan yang didukung dalam bagian detik dari nilai tanggal atau waktu.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Jumlah maksimum karakter yang diizinkan dalam kolom <code>text</code>, atau jumlah maksimum bita yang diizinkan dalam kolom <code>biner</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Menunjukkan apakah panjang kolom ini dapat bervariasi (hingga <code>MaxLength</code>) atau ukurannya tetap.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Nama tipe kolom di sistem tipe asli dari sumber (misalnya, <code>nvarchar</code> untuk SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Ekspresi default untuk nilai kolom ini dalam bahasa ekspresi asli sumber (misalnya, <code>42</code> or <code>newid()</code> untuk SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Deskripsi</code></td>    <td>Deskripsi kolom.</td>  </tr></table><br />



## Category
Table.Information
