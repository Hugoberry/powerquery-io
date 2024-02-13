---
title: Table.Schema
---

# Table.Schema


Hiermee wordt een tabel geretourneerd met een beschrijving van de kolommen (oftewel het schema) van de opgegeven tabel.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Remarks

Hiermee wordt een tabel geretourneerd met een beschrijving van de kolommen van <code>table</code>.<br />Elke rij in de tabel beschrijft de eigenschappen van een kolom van <code>table</code>:<br /><table>  <tr>    <td><b>Kolomnaam</b></td>    <td><b>Beschrijving</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>De naam van de kolom.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>De op 0 gebaseerde positie van de kolom in <code>table</code>.</td>  </tr>  <tr>    <td><code>Typenaam</code></td>    <td>De naam van het type kolom.</td>  </tr>  <tr>    <td><code>Soort</code></td>    <td>Het soort van het type kolom.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Geeft aan of de kolom <code>null</code>-waarden mag bevatten.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>De numerieke basis (bijvoorbeeld base-2, base-10) van de velden <code>NumericPrecision</code> en <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>De nauwkeurigheid van een numerieke kolom in de basis die wordt opgegeven met <code>NumericPrecisionBase</code>. Dit is het maximum aantal cijfers dat kan worden vertegenwoordigd door een waarde van dit type (inclusief fractionele cijfers).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>De schaal van een numerieke kolom in de basis die wordt opgegeven met <code>NumericPrecisionBase</code>. Dit is het aantal cijfers in het fractionele deel van een waarde van dit type. Een waarde <code>0</code> geeft een vaste schaal zonder fractionele cijfers aan. Een waarde <code>null</code> geeft aan dat de schaal niet bekend is (omdat deze zwevend of niet gedefinieerd is).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Het maximum aantal fractionele cijfers dat wordt ondersteund in het gedeelte met seconden van een datum- of tijdwaarde.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Het maximum aantal tekens dat is toegestaan in een <code>text</code>-kolom, of het maximum aantal bytes dat is toegestaan in een <code>binaire</code> kolom.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Geeft aan of deze kolom in lengte kan variëren (maximaal <code>MaxLength</code>) of een vaste grootte heeft.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>De naam van het type kolom in het systeemeigen typesysteem van de bron (bijvoorbeeld <code>nvarchar</code> voor SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>De standaardexpressie voor een waarde van deze kolom in de taal voor systeemeigen expressies van de bron (bijvoorbeeld <code>42</code> of <code>newid()</code> voor SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>De beschrijving van de kolom.</td>  </tr></table><br />



## Category
Table.Information
