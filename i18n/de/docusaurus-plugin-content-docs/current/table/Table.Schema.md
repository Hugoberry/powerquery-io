---
title: Table.Schema
---

# Table.Schema


Gibt eine Tabelle mit Beschreibungen der Spalten (d. h. das Schema) der angegebenen Tabelle zurück.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Remarks

Gibt eine Tabelle zurück, welche die Spalten von <code>table</code> beschreibt.<br />Jede Tabellenzeile beschreibt die Eigenschaften einer Spalte von <code>table</code>:<br /><table>  <tr>    <td><b>Spaltenname</b></td>    <td><b>Beschreibung</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Der Name der Spalte.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>Die 0-basierte Position der Spalte <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Der Name des Spaltentyps.</td>  </tr>  <tr>    <td><code>Art</code></td>    <td>Die Art des Spaltentyps.</td>  </tr>  <tr>    <td><code>ist nullwertig</code></td>    <td>Gibt an, ob die Spalte <code>NULL</code> Werte enthalten kann.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Die Zahlenbasis (z. B. Basis 2 oder Basis 10) der Felder <code>NumericPrecision</code> und <code>NumericScale</code>. </td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Die Genauigkeit einer numerischen Spalte, zu der durch <code>NumericPrecisionBase</code> angegebenen Basis. Dies ist die maximale Anzahl von Stellen (einschließlich Dezimalstellen), die durch einen Wert dieses Typs dargestellt werden kann.</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Die Dezimalstellen der numerischen Spalte zu der durch <code>NumericPrecisionBase</code> angegebenen Basis. Dies ist die Anzahl von Dezimalstellen eines Werts dieses Typs. Der Wert <code>0</code> gibt eine Spalte ohne Dezimalstellen an. Der Wert <code>null</code> gibt an, dass die Anzahl der Dezimalstellen nicht bekannt ist (weil es sich um einen Gleitkommatyp handelt oder weil sie nicht definiert ist).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Die maximale Anzahl von Dezimalstellen, die im Sekundenanteil eines Datums- oder Uhrzeitwerts unterstützt wird.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Die maximale Anzahl von Zeichen, die in einer Spalte vom Typ <code>text</code> zulässig ist, bzw. die maximale Anzahl von Bytes, die in einer Spalte vom Typ<code>binary</code> zulässig ist.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Gibt an, ob die Spalte eine variable Länge (bis zu <code>MaxLength</code>) oder eine feste Größe hat.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Der Name des Spaltentyps im Typsystem der Quelle (z. B. <code>nvarchar</code> für SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Der Standardausdruck für einen Wert dieser Spalte in der systemeigenen Ausdruckssprache der Quelle (z. B. <code>42</code> or <code>newid()</code> für SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Die Beschreibung der Spalte.</td>  </tr></table><br />



## Category
Table.Information
