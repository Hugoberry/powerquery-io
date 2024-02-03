---
title: Table.Schema
---

# Table.Schema


## Description

Returnerer en tabel, der indeholder en beskrivelse af kolonnerne (f.eks. skemaet) for den angivne tabel.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Returnerer en tabel, der beskriver kolonnerne for <code>table</code>.<br />Hver række i tabellen beskriver egenskaberne for en kolonne for <code>table</code>:<br /><table>  <tr>    <td><b>Kolonnenavn</b></td>    <td><b>Beskrivelse</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Navnet på kolonnen.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>Den 0-baserede position for kolonnen i <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Navnet på kolonnetypen.</td>  </tr>  <tr>    <td><code>Type</code></td>    <td>Typen af kolonne.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>On kolonnen kan indeholde <code>null</code> værdier.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Den numeriske base (f.eks. base-2 eller base-10) for felterne <code>NumericPrecision</code> og <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Præcisionen af en numerisk kolonne i den base, der er angivet af <code>NumericPrecisionBase</code>. Dette er det maksimale antal cifre, der kan vises for en værdi af denne type (herunder brøkcifre).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Skalaen for en numerisk kolonne i den base, der er angivet af <code>NumericPrecisionBase</code>. Dette er antallet af cifre i brøkdelen af en værdi af denne type. En værdi for <code>0</code> angiver en fast skala uden brøkcifre. En værdie for <code>null</code> angiver, at skalaen ikke er kendt (enten fordi den er flydende eller ikke er defineret).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Det maksimale antal brøkcifre, der understøttes i sekunddelen af en dato- eller klokkeslætsværdi.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Det maksimale antal tegn, der tillades i en kolonne af typen <code>text</code>, eller det maksimal antal byte, der tillades i en kolonne af typen <code>binary</code> column.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Angiver, om denne kolonne kan variere i længde (op til <code>MaxLength</code>) eller om den har en fast størrelse.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Navnet på kolonnens type i kildens oprindelige typesystem (f.eks. <code>nvarchar</code> for SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Standardudtryk for en værdi for denne kolonne på kildens oprindelige udtrykssprog (f.eks. <code>42</code> eller <code>newid()</code> for SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Beskrivelse af kolonne.</td>  </tr></table><br />



## Category
Table.Information
