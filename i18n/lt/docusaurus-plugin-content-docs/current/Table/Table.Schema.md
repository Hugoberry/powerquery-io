---
title: Table.Schema
---

# Table.Schema


## Description

Pateikiama lentelė, kurioje yra nurodytos lentelės stulpelių aprašas (t. y. schema).


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Pateikiama lentelė, kurioje aprašyti <code>table</code> stulpeliai.<br />Kiekvienoje lentelėje esančioje eilutėje aprašomos <code>table</code> stulpelio ypatybės:<br /><table>  <tr>    <td><b>Stulpelio pavadinimas</b></td>    <td><b>Aprašas</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Stulpelio pavadinimas.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td><code>table</code> esančio stulpelio 0 paremta padėtis.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Stulpelio tipo pavadinimas.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Stulpelio tipo rūšis.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Ar stulpelyje gali būti <code>null</code> reikšmių.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Laukų <code>NumericPrecision</code> ir <code>NumericScale</code> skaičiavimo sistema (pvz., dvejetainė, dešimtainė).</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Skaitinio stulpelio tikslumas naudojant parametru <code>NumericPrecisionBase</code> nurodytą skaičiavimo sistemą. Tai didžiausias skaitmenų skaičius, kurį galima pateikti šio tipo reikšmėje (įskaitant trupmeninius skaitmenis).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Skaitinio stulpelio skalė naudojant parametru <code>NumericPrecisionBase</code> nurodytą skaičiavimo sistemą. Tai skaitmenų skaičius šio tipo reikšmės trupmeninėje dalyje. Reikšme <code>0</code> žymima fiksuota skalė be trupmeninių skaitmenų. Reikšme <code>null</code> nurodoma, kad skalė nežinoma (nes ji slankiojanti arba neapibrėžta).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Didžiausias trupmeninių skaitmenų skaičius, palaikomas datos arba laiko reikšmės sekundžių dalyje.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Didžiausias <code>text</code> stulpelyje leidžiamas simbolių skaičius arba didžiausias <code>binary</code> stulpelyje leidžiamas baitų skaičius.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Nurodoma, ar šiame stulpelyje gali būti įvairaus ilgio reikšmės (iki <code>MaxLength</code> reikšmės), ar jos yra fiksuoto dydžio.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Stulpelio tipo pavadinimas vietinėje šaltinio tipų sistemoje (pvz., <code>nvarchar</code> naudojant „SQL Server“).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Numatytasis šio stulpelio reikšmės reiškinys vietine šaltinio reiškinių kalba (pvz., <code>42</code> arba <code>newid()</code> naudojant „SQL Server“).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Stulpelio aprašas.</td>  </tr></table><br />



## Category
Table.Information
