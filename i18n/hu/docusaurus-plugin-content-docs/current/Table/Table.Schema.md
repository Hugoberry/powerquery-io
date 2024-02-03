---
title: Table.Schema
---

# Table.Schema


## Description

A megadott tábla oszlopainak leírását (a sémát) tartalmazó táblát ad vissza.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

A(z) <code>table</code> oszlopait leíró táblát ad vissza.<br />A tábla egyes sorai a(z) <code>table</code> egy-egy oszlopának tulajdonságait írják le:<br /><table>  <tr>    <td><b>Oszlop neve</b></td>    <td><b>Leírás</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Az oszlop neve</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>A(z) <code>table</code> oszlopának 0-alapú pozíciója.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Az oszlop típusának neve.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Az oszlop típusának fajtája.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Tartalmazhat-e az oszlop <code>null</code> értékeket.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code>></td>    <td>A <code>NumericPrecision</code> és a <code>NumericScale</code> mezők számrendszere (például: kettes, tízes).</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>A számoszlop pontossága a <code>NumericPrecisionBase</code> által meghatározott rendszerben. Ez az ilyen típusú értékek által megjeleníthető számjegyek maximális száma (beleértve a tört számjegyeket is).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>A számoszlop skálája a <code>NumericPrecisionBase</code> által meghatározott rendszerben. Ez az ilyen típusú értékek tört részében lévő számjegyek száma. A <code>0</code> érték azt jelöli, hogy a skála rögzített, és nem tartalmaz tört számjegyeket. A <code>null</code> érték azt jelöli, hogy a skála nem ismert (nem rögzített, vagy nincs meghatározva).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Egy dátum- vagy időérték másodpercek része által támogatott tört számjegyek maximális száma.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Egy <code>text</code> oszlopban engedélyezett karakterek maximális száma, vagy egy <code>binary</code> oszlopban engedélyezett bájtok maximális száma</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Azt jelzi, hogy az oszlop lehet-e változó hosszúságú (a <code>MaxLength</code> értékéig), vagy rögzített a mérete.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Az oszlop típusának neve a forrás natív típusrendszerében (az SQL Server esetében például <code>nvarchar</code>).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Az oszlop értékének alapértelmezett kifejezése a forrás natív kifejezés nyelvén (az SQL Server esetében például <code>42</code> vagy <code>newid()</code>)</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Az oszlop leírása.</td>  </tr></table><br />



## Category
Table.Information
