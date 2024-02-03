---
title: Table.Schema
---

# Table.Schema


## Description

Vraća tabelu koja sadrži opis kolona (tj. šemu) navedene tabele.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Vraća tabelu koja opisuje kolone za <code>table</code>.<br />Svaki red u tabeli opisuje svojstva kolone za <code>table</code>:<br /><table>  <tr>    <td><b>Ime kolone</b></td>    <td><b>Opis</b></td>  </tr>  <tr>    <td><code>Ime</code></td>    <td>Ime kolone.</td>  </tr>  <tr>    <td><code>Pozicija</code></td>    <td>Pozicija zasnovana na 0 za kolonu u <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Ime tipa kolone.</td>  </tr>  <tr>    <td><code>Vrsta</code></td>    <td>Vrsta tipa kolone.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Svojstvo kolone da može da sadrži <code>null</code> vrednosti.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Numerička osnova (npr. osnova-2, osnova-10) polja <code>NumericPrecision</code> i <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Preciznost numeričke kolone u osnovi koju navodi <code>NumericPrecisionBase</code>. Ovo je maksimalan broj cifara koji se može predstaviti vrednošću ovog tipa (uključujući razlomke).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Skala numeričke kolone u osnovi koju navodi <code>NumericPrecisionBase</code>. Ovo je broj cifara u delu razlomka vrednosti ovog tipa. Vrednost <code>0</code> označava fiksnu razmeru bez razlomaka. Vrednost <code>null</code> označava da razmera nije poznata (zbog toga što je pokretna ili nije definisana).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Maksimalan broj razlomaka podržanih u drugom delu vrednosti datuma ili vremena.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Maksimalan broj znakova dozvoljenih u <code>tekstualnoj</code> koloni ili maksimalan broj dozvoljenih bajtova u <code>binarnoj</code> koloni.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Označava da li ova kolona može da varira u dužini (do <code>MaxLength</code>) ili je fiksne veličine.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Ime tipa kolone u izvornom sistemu tipa izvora (na primer, <code>nvarchar</code> za SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Podrazumevani izraz za vrednost ove kolone na izvornom jeziku izraza izvora (npr. <code>42</code> ili <code>newid()</code>za SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Opis</code></td>    <td>Opis kolone.</td>  </tr></table><br />



## Category
Table.Information
