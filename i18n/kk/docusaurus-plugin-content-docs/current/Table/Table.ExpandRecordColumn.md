---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Жазбалардың бағанын мәндердің әрқайсысы бар бағандарға кеңейтеді.


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

Кіріс <code>table</code> ішінде жазбалардың <code>column</code> берілген болса, жазбадағы әр өріс үшін баған бар кестені жасайды. Таңдау бойынша, жаңа кестедегі бағандар үшін бірегей атауларды қамтамасыз ету үшін <code>newColumnNames</code> көрсетуге болады.    <ul>        <li><code>table</code>: кеңейтетін жазба бағаны бар бастапқы кесте. </li>        <li><code>column</code>: кеңейтетін баған.</li>        <li><code>fieldNames</code>: кестедегі бағандарға кеңейтетін өрістердің тізімі.</li>        <li><code>newColumnNames</code>: жаңа бағандарға беретін баған атауларының тізімі. Жаңа баған атаулары жаңа кестедегі ешбір бағанды қайталамауы керек.</li>    </ul>


## Examples

### Example #1 
&lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; кестесіндегі [a] бағанын 3 бағанға кеңейту: &#34;aa&#34;, &#34;bb&#34; және &#34;cc&#34;.
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
