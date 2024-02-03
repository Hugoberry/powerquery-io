---
title: Table.Schema
---

# Table.Schema


## Description

Vrátí tabulku obsahující popis sloupců (tj. schéma) zadané tabulky.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Vrátí tabulku popisující sloupce <code>table</code>.<br />Každý řádek v tabulce popisuje vlastnosti sloupce <code>table</code>:<br /><table>  <tr>    <td><b>Název sloupce</b></td>    <td><b>Popis</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Název sloupce</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>Pozice sloupce v: <code>table</code> vycházející z nuly</td>  </tr>  <tr>    <td><code>TypeName</code></td>   <td>Název typu sloupce</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Druh typu sloupce</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Informace o tom, jestli sloupec může obsahovat hodnoty <code>null</code></td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Číselná soustava (například dvojková nebo desítková) polí <code>NumericPrecision</code> a <code>NumericScale</code></td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Přesnost číselného sloupce v číselné soustavě určené parametrem <code>NumericPrecisionBase</code>. Jde o maximální počet číslic, které mohou být reprezentovány hodnotou tohoto typu (včetně desetinných míst).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Rozsah číselného sloupce v číselné soustavě určené parametrem <code>NumericPrecisionBase</code>. Jde o počet číslic v desetinné části hodnoty tohoto typu. Hodnota <code>0</code> znamená pevný rozsah bez desetinných míst. Hodnota <code>null</code> znamená, že rozsah není znám (buď proto, že je plovoucí, nebo proto, že není definován).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Maximální počet desetinných míst podporovaných v části sekund hodnoty data nebo času</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Maximální počet znaků povolený ve sloupci <code>text</code> nebo maximální počet bajtů povolený ve sloupci <code>binary</code></td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Označuje, jestli může být délka tohoto sloupce proměnlivá (až do délky určené parametrem <code>MaxLength</code>), nebo jestli je pevná.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Název typu sloupce v nativním systému typů zdroje (například <code>nvarchar</code> pro SQL Server)</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Výchozí výraz pro hodnotu tohoto sloupce v nativním jazyce výrazů zdroje (například <code>42</code> nebo <code>newid()</code> pro SQL Server)</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Popis sloupce</td>  </tr></table><br />



## Category
Table.Information
