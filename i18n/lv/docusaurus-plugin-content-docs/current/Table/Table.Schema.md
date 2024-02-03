---
title: Table.Schema
---

# Table.Schema


## Description

Atgriež tabulu, kas satur norādītās tabulas kolonnu aprakstu (t.i., shēmu).


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Atgriež tabulu, kurā sniegts <code>table</code> kolonnu apraksts.<br />Katrā tabulas rindā ir aprakstīti <code>table</code> kolonnas rekvizīti:<br /><table>  <tr>    <td><b>Kolonnas nosaukums</b></td>    <td><b>Apraksts</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Kolonnas nosaukums.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td> <code>table</code>iekļautās kolonnas pozīcija, sākot skaitīt ar 0.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Kolonnas tipa nosaukums.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Kolonnas tipa veids.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Norāda, vai kolonnā drīkst būt ietvertas vērtības <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Skaitliskā bāze (piemēram, bāze 2, bāze 10) laukiem <code>NumericPrecision</code> un <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Skaitliskās kolonnas precizitāte ar bāzi, kas norādīta vienumā <code>NumericPrecisionBase</code>. Šis ir maksimālais ciparu skaits, kas var tikt attēlots ar šī tipa vērtību (ieskaitot ciparus aiz komata).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Skaitliskās kolonnas skala ar bāzi, kas norādīta vienumā <code>NumericPrecisionBase</code>. Šis ir ciparu skaits šī tipa vērtības daļā aiz komata. Vērtība <code>0</code> norāda uz fiksētu mērogu bez cipariem aiz komata. Vērtība <code>null</code> norāda, ka mērogs nav zināms (tāpēc, ka tas ir peldošs vai nav definēts).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Maksimālais aiz komata esošo ciparu skaits, kāds tiek atbalstīts datuma vai laika vērtības sekunžu daļā.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Maksimālais rakstzīmju skaits, kāds tiek atļauts kolonnā ar tipu <code>text</code> (teksts), vai maksimālais baitu skaits, kāds tiek atļauts kolonnā ar tipu <code>binary</code> (bināra).</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Norāda, vai šīs kolonnas garums var būt dažāds (līdz vērtībai <code>MaxLength</code>) vai tās lielums ir fiksēts.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Kolonnas tipa nosaukums avota vietējā tipu sistēmā (piemēram, <code>nvarchar</code> sistēmai SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Noklusējuma izteiksme šīs kolonnas vērtībai avota vietējā izteiksmju valodā (piemēram, <code>42</code> vai <code>newid()</code> sistēmai SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Kolonnas apraksts.</td>  </tr></table><br />



## Category
Table.Information
