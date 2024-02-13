---
title: Table.Schema
---

# Table.Schema


Zwraca tabelę zawierającą opis kolumn (np. schemat) określonej tabeli.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Remarks

Zwraca tabelę opisującą kolumny elementu <code>table</code>.<br />Każdy wiersz w tabeli opisuje właściwości kolumny elementu <code>table</code>:<br /><table>  <tr>    <td><b>Nazwa kolumny</b></td>    <td><b>Opis</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Nazwa kolumny.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>Położenie kolumny elementu <code>table</code> względem punktu 0.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Nazwa typu kolumny.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Rodzaj typu kolumny.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Określa, czy kolumna może zawierać wartości <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Podstawa liczbowa (np. base-2, base-10) pól <code>NumericPrecision</code> i <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Dokładność kolumny liczbowej w podstawie określonej przy użyciu wartości <code>NumericPrecisionBase</code>. Jest to maksymalna liczba cyfr, która może być reprezentowana przez wartość tego typu (w tym liczba miejsc po przecinku).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Skala kolumny liczbowej w podstawie określonej przy użyciu wartości <code>NumericPrecisionBase</code>. Jest to liczba miejsc po przecinku wartości tego typu. Wartość <code>0</code> oznacza stałą skalę bez miejsc po przecinku. Wartość <code>null</code> określa nieznaną skalę (zmiennoprzecinkową lub niezdefiniowaną).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Maksymalna liczba miejsc po przecinku obsługiwana w części sekundowej wartości daty lub godziny.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Maksymalna liczba znaków dozwolona w kolumnie <code>text</code> lub maksymalna liczba bajtów dozwolona w kolumnie <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Określa, czy długość kolumny może się zmieniać (maksymalnie do wartości <code>MaxLength</code>), czy też jej rozmiar jest stały.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Nazwa typu kolumny w systemie typu natywnego źródła (np. <code>nvarchar</code> w przypadku programu SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Wyrażenie domyślne dla wartości tej kolumny w natywnym języku wyrażenia źródła (np. <code>42</code> lub <code>newid()</code> w przypadku programu SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Opis kolumny.</td>  </tr></table><br />



## Category
Table.Information
