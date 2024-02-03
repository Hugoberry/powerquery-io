---
title: Table.Schema
---

# Table.Schema


## Description

Palauttaa taulukon, joka sisältää määritetyn taulukon sarakkeiden kuvauksen (eli rakenteen).


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Palauttaa taulukon, joka kuvaa<code>table</code> sarakkeita.<br />Kukin taulukon rivi kuvailee <code>table</code> sarakkeen ominaisuudet: :<br /><table>  <tr>    <td><b>Sarakkeen nimi</b></td>    <td><b>Kuvaus</b></td>  </tr>  <tr>    <td><code>Nimi</code></td>    <td>Sarakkeen nimi.</td>  </tr>  <tr>    <td><code>Sijainti -</code></td>    <td>sarakkeen 0-pohjainen sijainti kohteessa <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Sarakkeen nimi.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Sarakkeen tyyppi.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>, sarake voi sisältää <code>null-tyhjäarvoja</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Numeerinen kanta (esimerkiksi 2- tai 10-kanta)<code>NumericPrecision</code> ja <code>NumericScale</code> kentät.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>NumericPrecision-kohteen numeerisen sarakkeen tarkkuus <code>NumericPrecisionBase-</code> määrittämässä kantaluvussa. Tämä on enimmäismäärä numeroita, joita tämän tyyppinen arvo voi edustaa (mukaan lukien murtolukunumerot).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>numeerisen sarakkeen asteikko kohteen <code>NumericPrecisionBase</code> määrittämässä pohjassa. Tämä on tämäntyyppisen arvon murtolukuosan numeroiden määrä. Arvo, joka on <code>0</code>, ilmaisee kiinteää asteikkoa ilman murtolukunumeroita. Arvo <code>null</code> ilmaisee, että asteikkoa ei tunneta (joko siksi, että se on irrallinen tai määrittämätön).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Päivämäärä- tai aika-arvon sekuntien osassa tuettu murtolukunumeroiden enimmäismäärä.</td>  </tr>  <tr>    <td><code>MaxLength-</code></td>    <td><code>Tekstisarakkeessa</code> sallittujen merkkien enimmäismäärä sarake, tai <code>binaarisarakkeessa</code> sallittujen tavujen enimmäismäärä.</td>  </tr>  <tr>    <td><code>IsVariableLength-</code></td>    <td>ilmaisee, ilmaiseeko tämä sarake voi vaihdella pituutta (enintään <code>MaxLength</code>) tai jos sen koko on kiinteä.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Sarakkeen tyypin nimi lähteen alkuperäisessä tyyppijärjestelmässä (esimerkiksi <code>nvarchar-</code> kohteelle SQL Server).</td>  </tr>  <tr><td><code>NativeDefaultExpression</code></td>    <td>Tämän sarakkeen arvon oletuslauseke lähteen alkuperäisessä lausekekielessä (esimerkiksi  <code>42</code> tai <code>newid()</code> kohteelle SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Kuvaus</code></td>    <td>Sarakkeen kuvaus.</td>  </tr></table><br />



## Category
Table.Information
