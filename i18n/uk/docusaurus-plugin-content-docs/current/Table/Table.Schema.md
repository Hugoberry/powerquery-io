---
title: Table.Schema
---

# Table.Schema


## Description

Повертає таблицю з описом стовпців (тобто схемою) указаної таблиці.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Повертає таблицю з описом стовпців таблиці "<code>table</code>".<br />Кожен рядок таблиці описує властивості стовпця таблиці "<code>table</code>", як описано нижче.<br /><table>  <tr>    <td><b>Ім’я стовпця</b></td>    <td><b>Опис</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Ім’я стовпця.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>Відрахована від нуля позиція стовпця в таблиці "<code>table</code>".</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Ім’я типу стовпця.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Різновид типу стовпця.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Указує, чи може стовпець містити <code>Null</code>-значення.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Основа системи числення (наприклад, двійкова, десяткова) для полів <code>NumericPrecision</code> і <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Точність числового стовпця в основі, визначена значенням <code>NumericPrecisionBase</code>. Це максимальна кількість цифр, яку може мати значення цього типу (включно з цифрами дробової частини).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Масштаб числового стовпця в основі, визначений значенням <code>NumericPrecisionBase</code>. Це кількість цифр у дробовій частині значення цього типу. Значення <code>0</code> указує на фіксований масштаб без дробової частини. <code>Null</code>-значення означає, що масштаб невідомий (з рухомою комою або невизначений).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Максимальна кількість цифр у дробовій частині, що підтримується для секунд у значенні дати або часу.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Максимальна дозволена кількість символів у стовпці <code>text</code> або максимальна дозволена кількість байтів у стовпці <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Указує, чи може змінюватися довжина стовпця (до значення <code>MaxLength</code>), чи розмір фіксований.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Ім’я типу стовпця у власній системі типів джерела (наприклад, <code>nvarchar</code> для SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Вираз за замовчуванням для значення цього стовпця власною мовою виразів джерела (наприклад, <code>42</code> або <code>newid()</code> для SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Опис стовпця.</td>  </tr></table><br />



## Category
Table.Information
