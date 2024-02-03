---
title: Table.Schema
---

# Table.Schema


## Description

Returnerar en tabell som innehåller en beskrivning av den angivna tabellens kolumner (t.ex. schemat).


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

 Returnerar en tabell som beskriver kolumnerna i <code>table</code>.<br /> Varje rad i tabellen beskriver egenskaperna för en kolumn i <code>table</code>:<br /><table>  <tr>    <td><b>Kolumnnamn</b></td>    <td><b>Beskrivning</b></td> </tr>  <tr>    <td><code>Namn</code></td>    <td>Kolumnens namn.</td> </tr>  <tr>    <td><code>Plats</code></td>    <td>Den 0-baserade platsen för kolumnen i <code>table</code>.</td>  </tr>  <tr>    <td><code>Typnamn</code></td>    <td>Namnet på kolumnens typ.</td> </tr>  <tr>    <td><code>Typ</code></td>    <td>Kolumnens typ.</td>  </tr>\r\n  <tr>    <td><code>IsNullable</code></td>    <td>Huruvida kolumnen kan innehålla <code>null</code>-värden.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Den numeriska basen (t.ex. base-2, base-10) för <code>NumericPrecision</code>- och <code>NumericScale</code>-fält.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Precisionen för en numerisk kolumn i den bas som anges av <code>NumericPrecisionBase</code>. Detta är det maximala antalet siffror som kan representeras med ett värde av den här typen (inklusive decimaler).</td>   </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Skalan för en numerisk kolumn i den bas som anges av <code>NumericPrecisionBase</code>. Detta är antalet siffror i decimaldelen av ett värde av den här typen. Ett värde på <code>0</code> indikerar en fast skala utan decimaler. Ett <code>null</code>-värde indikerar att skalan är okänd (eftersom den är flytande eller inte definierad).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Det maximala antal decimaler som stöds i den andra delen av datum- eller tidsvärdet.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Det maximala antal tecken som tillåts i en <code>text</code>-kolumn, eller det maximala antalet byte som tillåts i en <code>binary</code>-kolumn.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Indikerar om den här kolumnen kan variera i längd (upp till <code>MaxLength</code>) eller om den har fast storlek.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Namnet på kolumntypen i källans originaltypssystem (t.ex. <code>nvarchar</code> för SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Standarduttrycket för ett värde för den här kolumnen i källans originaluttrycksspråk (t.ex. <code>42</code> eller <code>newid()</code> för SQL Server).</td>  </tr>  <tr>   <td>&nbsp;</td>     <td>&nbsp;</td>  </tr>  <tr>    <td><code>Beskrivning</code></td>    <td>Kolumnens beskrivning.</td>  </tr></table><br />



## Category
Table.Information
