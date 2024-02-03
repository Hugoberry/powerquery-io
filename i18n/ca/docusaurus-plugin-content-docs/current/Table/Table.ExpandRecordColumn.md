---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Expandeix una columna de registres en columnes amb cadascun dels valors.


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

Donada la <code>column</code> de registres de l'entrada <code>table</code>, crea una taula amb una columna per a cada camp del registre. Com a opció, es pot especificar <code>newColumnNames</code> per garantir noms únics per a les columnes de la taula nova.    <ul>        <li><code>table</code>: la taula original amb la columna de registre que s'ha d'expandir. </li>        <li><code>column</code>: la columna que s'ha d'expandir.</li>        <li><code>fieldNames</code>: la llista de camps que s'ha d'expandir en columnes de la taula.</li>        <li><code>newColumnNames</code>: la llista de noms de columna que s'han de posar a les columnes noves. Els noms de columna nous no poden duplicar cap columna de la taula nova.</li>    </ul>


## Examples

### Example #1 
Expandeix la columna [a] de la taula &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; en 3 columnes: &#34;aa&#34;, &#34;bb&#34; i &#34;cc&#34;.
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
