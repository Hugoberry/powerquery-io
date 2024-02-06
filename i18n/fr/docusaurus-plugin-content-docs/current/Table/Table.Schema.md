---
title: Table.Schema
---

# Table.Schema


Retourne une table contenant une description des colonnes (c&#39;est-à-dire le schéma) de la table spécifiée.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Remarks

Renvoie un tableau décrivant les colonnes de <code>table</code>.<br />Chaque ligne du tableau décrit les propriétés d'une colonne de <code>table</code> : <br /><table>  <tr>    <td><b>Nom de la colonne</b></td>    <td><b>Description</b></td>  </tr>  <tr>    <td><code>Nom</code></td>    <td>Le nom de la colonne.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>La position de base 0 de la colonne dans <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Le nom du type de la colonne.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Le genre du type de la colonne.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Si la colonne peut contenir des valeurs <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>La base numérique (par exemple, base-2 ou base-10) des champs <code>NumericPrecision</code> et <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>La précision d'une colonne numérique dans la base spécifiée par <code>NumericPrecisionBase</code>. Il s'agit du nombre maximum de chiffres pouvant être représentés par une valeur de ce type (y compris les chiffres fractionnaires).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>L'échelle d'une colonne numérique dans la base spécifiée par <code>NumericPrecisionBase</code>. C'est le nombre de chiffres dans la partie fractionnaire d'une valeur de ce type. Une valeur de <code>0</code> indique une échelle fixe sans chiffres fractionnaires. Une valeur <code>null</code> indique que l'échelle n'est pas connue (soit parce qu'elle est flottante ou non définie).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Le nombre maximum de chiffres fractionnaires pris en charge dans la partie secondes d'une valeur de date ou d'heure.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Le nombre maximum de caractères autorisés dans une colonne <code>text</code>, ou le nombre maximum d'octets autorisés dans une colonne <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Indique si cette colonne peut varier en longueur (jusqu'à <code>MaxLength</code>) ou si elle est de taille fixe.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Le nom du type de la colonne dans le système de types natif de la source (par exemple, <code>nvarchar</code> pour SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>L'expression par défaut pour une valeur de cette colonne dans le langage d'expression natif de la source (par exemple, <code>42</code> ou <code>newid()</code> pour SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>La description de la colonne.</td>  </tr></table><br />



## Category
Table.Information
