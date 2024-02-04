---
title: Table.Schema
---

# Table.Schema


## Description

Devolve uma tabela com uma descrição das colunas (isto é, o esquema) da tabela especificada.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Devolve uma tabela com a descrição das colunas de <code>table</code>.<br />Cada linha na tabela descreve as propriedades de uma coluna de: <code>table</code>:<br /><table>  <tr>    <td><b>Nome da Coluna</b></td>    <td><b>Descrição</b></td>  </tr>  <tr>    <td><code>Nome</code></td>    <td>O nome da coluna.</td>  </tr>  <tr>    <td><code>Posição</code></td>    <td>A posição baseada em 0 da coluna em <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>O nome do tipo de coluna.</td>  </tr>  <tr>    <td><code>Categoria</code></td>    <td>A categoria do tipo da coluna.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Indica se a coluna pode ou não conter valores <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>A base numérica (por exemplo, base 2, base 10) dos campos <code>NumericPrecision</code> e <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>A precisão de uma coluna numérica na base especificada por <code>NumericPrecisionBase</code>. Este é o número máximo de dígitos que podem ser representados por um valor deste tipo (incluindo dígitos fracionários).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>A escala de uma coluna numérica na base especificada por <code>NumericPrecisionBase</code>. Este é o número de dígitos na secção fracionária de um valor deste tipo. Um valor igual a <code>0</code> indica uma escala fixa sem dígitos fracionários. Um valor igual a <code>null</code> indica que a escala não é conhecida (por ser flutuante ou por não estar definida).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>O número máximo de dígitos fracionários suportados na secção de segundos de um valor de data ou de hora.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>O número máximo de carateres permitidos numa coluna do tipo <code>text</code> ou o número máximo de bytes permitidos numa coluna do tipo <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Indica se esta coluna pode variar em termos de comprimento (até <code>MaxLength</code>)  ou se é de tamanho fixo.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>O nome do tipo de coluna no sistema de tipo nativo da origem (por exemplo, <code>nvarchar</code> para SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>A expressão predefinida para um valor desta coluna na linguagem de expressão nativa da origem (por exemplo, <code>42</code> ou <code>newid()</code> para SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Descrição</code></td>    <td>A descrição da coluna.</td>  </tr></table><br />



## Category
Table.Information
