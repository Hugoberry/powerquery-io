---
title: Table.Schema
---

# Table.Schema


Restituisce una tabella contenente una descrizione delle colonne, ovvero lo schema, della tabella specificata.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Remarks

Restituisce una tabella che descrive le colonne di <code>table</code>.<br />Ogni riga nella tabella descrive le proprietà di una colonna di <code>table</code>:<br /><table>  <tr>    <td><b>Column Name</b></td>    <td><b>Description</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>The name of the column.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>La posizione 0-based della colonna in <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Il nome del tipo di colonna.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Il genere di tipo di colonna.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Se la colonna può contenere valori di tipo <code>null</code>.</td>  </tr>  <tr>   <td><code>NumericPrecisionBase</code></td>    <td>TLa base numerica (ad esempio, base-2 o base-10) dei campi <code>NumericPrecision</code> e <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>La precisione di una colonna numerica nella base specificata da <code>NumericPrecisionBase</code>. Si tratta del numero massimo di cifre che possono essere rappresentate da un valore di questo tipo (comprese le cifre frazionarie).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>La scala di una colonna numerica nella base specificata da <code>NumericPrecisionBase</code>. Si tratta del numero di cifre nella parte frazionaria di un valore di questo tipo. Un valore di <code>0</code> indica una scala fissa senza cifre frazionarie. Un valore di <code>null</code> indica che la scala non è nota (perché mobile o non definita).</td>  </tr>  <tr> <td><code>DateTimePrecision</code></td> <td>Numero massimo di cifre frazionarie supportate</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Numero massimo di caratteri consentiti in una colonna di tipo <code>text</code> o il numero massimo di byte consentiti in una colonna di tipo <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Indica se la lunghezza della colonna può variare (fino al limite definito in <code>MaxLength</code>) o se le dimensioni sono fisse..</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Nome del tipo della colonna nel sistema dei tipi nativo dell'origine (ad esempio, <code>nvarchar</code> per SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Espressione predefinita per un valore di questa colonna nel linguaggio delle espressioni nativo dell'origine (ad esempio, <code>42</code> o <code>newid()</code> per SQL Server) </td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Descrizione della colonna.</td>  </tr></table><br />



## Category
Table.Information
