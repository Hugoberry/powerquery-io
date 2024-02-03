---
title: Table.Schema
---

# Table.Schema


## Description

Retorna uma tabela contendo uma descrição das colunas (ou seja, o esquema) da tabela especificada.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Retorna uma tabela descrevendo as colunas de <code>table</code>.<br />Cada linha na tabela descreve as propriedades de uma coluna de <code>table</code>:<br /><table>  <tr>    <td><b>Nome da Coluna</b></td>    <td><b>Descrição</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>O nome da coluna.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>A posição baseada em 0 da coluna em <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>O nome do tipo da coluna.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>A variante do tipo da coluna.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Se a coluna pode conter valores <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>A base numérica (por exemplo, base 2 ou base 10) dos campos <code>NumericPrecision</code> and <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>A precisão de uma coluna numérica é especificada por base por <code>NumericPrecisionBase</code>. Esse é o número máximo de dígitos que podem ser representados por um valor desse tipo (incluindo dígitos fracionais).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>A escala de uma coluna numérica é especificada por base por <code>NumericPrecisionBase</code>. Esse é o número de dígitos na parte fracionária de um valor desse tipo. Um valor de <code>0</code> indica uma escala fixa sem dígitos fracionais. Um valor <code>null</code> indica que a escala não é conhecida (porque está flutuando ou não é definida).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>O número máximo de dígitos fracionais com suporte na parte dos segundos de um valor de data ou temporal.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>O número máximo de caracteres permitido de caracteres permitido em uma coluna <code>text</code> ou o número máximo de bytes permitidos em uma coluna <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Indica se essa coluna pode variar em comprimento (até <code>MaxLength</code>) ou se este estiver no tamanho fixo.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>O nome do tipo de coluna no sistema tipo nativo da fonte (por exemplo, <code>nvarchar</code> para SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>A expressão padrão de um valor dessa coluna é a linguagem de expressão nativa da fonte (por exemplo, <code>42</code> ou <code>newid()</code> para SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>A descrição da coluna.</td>  </tr></table><br />



## Category
Table.Information
