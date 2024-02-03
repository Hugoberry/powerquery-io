---
title: Table.Schema
---

# Table.Schema


## Description

Көрсетілген кестенің бағандарының сипаттамасы бар кестені (схема) қайтарады.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

<code>table</code> бағандарын сипаттайтын кестені қайтарады.<br />Кестедегі әрбір жол <code>table</code> бағанының сипаттарын көрсетеді:<br /><table>  <tr>    <td><b>Баған атауы</b></td>    <td><b>Сипаттама</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Бағанның атауы.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td><code>table</code> бағанының 0-ге негізделген орны.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Баған түрінің атауы.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Баған түрінің бір түрі.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Бағанда <code>null</code> мәндерінің болуы не болмауын анықтайды.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td><code>NumericPrecision</code> және <code>NumericScale</code> өрістерінің сандық негізі (мысалы, негіз-2, негіз-10).</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td><code>NumericPrecisionBase</code> көрсетілген негіздегі сандық бағанның дәлдігі. Бұл осы түрдегі мәнмен көрсетуге болатын цифрлардың максималды саны (бөлшек цифрларын қоса алғанда).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td><code>NumericPrecisionBase</code> көрсетілген негіз бойынша сандық бағанның масштабы. Бұл осы түрдегі мәннің бөлшек бөлігіндегі цифрлар саны. <code>0</code> мәні бөлшек бөлігінің цифрларсыз тұрақты масштабын көрсетеді. <code>null</code> мәні масштабтың белгісіз екенін көрсетеді (себебі ол өзгермелі немесе анықталмаған болғандықтан).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Секундаға жауап беретін күн немесе уақыт мәні бөлімінде қолдау көрсетілетін бөлшек бөлімінің максималды цифрлар саны.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td><code>text</code> бағанында рұқсат етілген таңбалардың максималды саны немесе <code>binary</code> бағанында рұқсат етілген байттардың максималды саны.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Осы бағанның ұзындық бойынша өзгеру мүмкіндігін (<code>MaxLength</code> мәніне дейін) немесе тұрақты өлшемде болуын көрсетеді.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Дереккөз түрлерінің өз жүйесіндегі баған түрінің атауы (мысалы, SQL Server үшін <code>nvarchar</code>).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Дереккөздің өз өрнек тіліндегі осы баған мәні үшін әдепкі өрнегі (мысалы, SQL Server үшін <code>42</code> немесе <code>newid()</code>).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Баған сипаттамасы.</td>  </tr></table><br />



## Category
Table.Information
