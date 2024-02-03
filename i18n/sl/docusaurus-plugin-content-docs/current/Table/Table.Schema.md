---
title: Table.Schema
---

# Table.Schema


## Description

Vrne tabelo, ki vsebuje opis stolpcev (npr. shemo) določene tabele.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Vrne tabelo, ki opisuje stolpce tabele <code>table</code>.<br />Vsaka vrstica v tabeli opisuje lastnosti stolpca za <code>table</code>:<br /><table>  <tr>    <td><b>Ime stolpca</b></td>    <td><b>Opis</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Ime stolpca.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>Ničelni položaj stolpca v tabeli <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Ime vrste stolpca.</td>  </tr> <tr>    <td><code>Kind</code></td>    <td>Vrsta stolpca.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Ali stolpec lahko vsebuje vrednosti <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Številska osnova (npr. z osnovo 2 ali 10) polj <code>NumericPrecision</code> in <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Natančnost številskega stolpca v osnovi, določena z vrednostjo <code>NumericPrecisionBase</code>. To je največje število števk, ki jih lahko predstavlja vrednost te vrste (vključno s številom mest v števcu oz. imenovalcu).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Lestvica številskega stolpca v osnovi, kot jo določa <code>NumericPrecisionBase</code>. To je število števk v števcu ali imenovalcu vrednosti te vrste. Vrednost <code>0</code> označuje fiksno lestvico brez števk v števcu ali imenovalcu. Vrednost <code>null</code> označuje, da lestvica ni znana (morda zato, ker je spremenljiva ali ker ni določena).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Največje število števk v imenovalcu ali števcu, ki je podprto v delu s sekundami vrednosti za datum ali čas.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Največje število dovoljenih znakov v stolpcu <code>text</code> ali največje število dovoljenih bajtov v stolpcu <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Označuje, ali se dolžina tega stolpca lahko spreminja (do <code>MaxLength</code>) ali pa je velikost fiksna.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Ime vrste stolpca v sistemu originalne vrste vira (npr. <code>nvarchar</code> for SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Privzeti izraz za vrednost tega stolpca v jeziku izvirnega izraza za vir (npr. <code>42</code> ali <code>newid()</code> za SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Opis stolpca.</td>  </tr></table><br />



## Category
Table.Information
