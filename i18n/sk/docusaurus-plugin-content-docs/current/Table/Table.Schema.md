---
title: Table.Schema
---

# Table.Schema


## Description

Vráti tabuľku obsahujúcu popis stĺpcov (t. j. schému) určenej tabuľky.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Vráti tabuľku s popisom stĺpcov tabuľky <code>table</code>.<br />Každý riadok v tabuľke popisuje vlastnosti stĺpca tabuľky <code>table</code>:<br /><table>  <tr>    <td><b>Názov stĺpca</b></td>    <td><b>Popis</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Názov stĺpca.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>Poloha v stĺpci <code>table</code> založená na nule.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Názov typu stĺpca.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Druh typu stĺpca.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Či stĺpec môže obsahovať hodnoty typu <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Číselný základ (napr. dvojkový, desiatkový) polí <code>NumericPrecision</code> a <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Presnosť číselného stĺpca v základe určenom v stĺpci <code>NumericPrecisionBase</code>. Maximálny počet číslic, ktorý možno vyjadriť hodnotou tohto typu (vrátane zlomkových číslic).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Rozsah číselného stĺpca v základe určenom stĺpcom <code>NumericPrecisionBase</code>. Počet číslic v zlomkovej časti hodnoty tohto typu. Hodnota <code>0</code> označuje pevný rozsah bez zlomkových číslic. Hodnota <code>null</code> označuje, že rozsah nie je známy (pretože je plávajúci alebo nie je definovaný).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Maximálny počet zlomkových číslic podporovaných v sekundovej časti hodnoty dátumu a času.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Maximálny počet znakov povolených v stĺpci <code>text</code> alebo maximálny počet bajtov povolených v stĺpci <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Označuje, či tento stĺpec môže mať rôznu dĺžku (max. <code>MaxLength</code>) alebo či má pevnú veľkosť.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Názov typu stĺpca v natívnom systéme typu zdroja (napr.  <code>nvarchar</code> pre SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Predvolený výraz pre hodnotu tohto stĺpca v natívnom jazyku výrazu zdroja (napr. <code>42</code> alebo <code>newid()</code> pre SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Popis stĺpca.</td>  </tr></table><br />



## Category
Table.Information
