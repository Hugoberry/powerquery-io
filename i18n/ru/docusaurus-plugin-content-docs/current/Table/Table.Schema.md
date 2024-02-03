---
title: Table.Schema
---

# Table.Schema


## Description

Возвращает таблицу, содержащую описание столбцов (например, схему) указанной таблицы.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Возвращает таблицу с описанием столбцов <code>table</code>.<br />Каждая строка в таблице описывает свойства столбца <code>table</code>:<br /><table>  <tr>    <td><b>Имя столбца</b></td>    <td><b>Описание</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Имя столбца.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>Отсчитываемое от 10 положение столбца в <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Имя типа столбца.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Вид типа столбца.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Определяет, может ли столбец содержать значения <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Основание системы счисления (например, основание 2, основание 10) полей <code>NumericPrecision</code> and <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Точность числового столбца по основанию, указанному в <code>NumericPrecisionBase</code>. Это максимальное число цифр, которое может быть представлено значением данного типа (включая цифры дробной части).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Масштаб числового столбца по основанию, указанному в <code>NumericPrecisionBase</code>. Это число цифр в дробной части значения данного типа. Значение <code>0</code> указывает на фиксированный масштаб без цифр дробной части. Значение <code>null</code> указывает, что масштаб неизвестен (из-за того, что он является плавающим или не задан).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Максимальное число цифр дробной части, поддерживаемое в той части значения даты и времени, которая отвечает за секунды.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Максимальное число знаков, разрешенное в столбце <code>text</code>, или максимальное число байтов, разрешенное в столбце <code>binary</code> column.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Указывает, может ли столбец иметь переменную длину (вплоть до значения <code>MaxLength</code>) или его размер фиксирован.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Имя типа столбца в собственной системе типов источника (например, <code>nvarchar</code> для SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Выражение по умолчанию для значения этого столбца в собственном языке выражений источника (например, <code>42</code> или <code>newid()</code> для SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Описание столбца.</td>  </tr></table><br />



## Category
Table.Information
