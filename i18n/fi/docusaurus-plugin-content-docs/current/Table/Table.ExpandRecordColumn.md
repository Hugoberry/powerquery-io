---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Laajentaa tietuesarakkeen sarakkeisiin kullekin arvolle.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Details

Kun annetaan tietueiden <code>column</code> syötteessä <code>table</code>, luo taulukon, jossa on sarake tietueen kullekin kentälle. Valinnaisesti <code>newColumnNames</code> voidaan määrittää, jotta varmistetaan, että uuden taulukon sarakkeilla on yksilöivät nimet.    <ul>        <li><code>table</code>: alkuperäinen taulukko, jossa on laajennettava tietuesarake. </li>        <li><code>column</code>: laajennettava sarake.</li>        <li><code>fieldNames</code>: luettelo kentistä, jotka laajennetaan taulukon uusiin sarakkeisiin.</li>        <li><code>newColumnNames</code>: luettelo sarakkeiden nimistä, jotka annetaan uusille sarakkeille. Uudet sarakkeiden nimiä eivät voi olla uuden taulukon minkään sarakkeen kaksoiskappaleita.</li>    </ul>


## Examples

### Example #1 
Laajenna sarake [a] taulukossa &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; kolmeksi sarakkeeksi, jotka ovat &#34;aa&#34;, &#34;bb&#34; ja &#34;cc&#34;.
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
