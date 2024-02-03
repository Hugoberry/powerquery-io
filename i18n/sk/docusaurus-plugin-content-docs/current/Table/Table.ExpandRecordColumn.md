---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Rozbalí stĺpec záznamov na stĺpce s každou z hodnôt.


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

S daným stĺpcom <code>column</code> záznamov vo vstupe <code>table</code> vytvorí tabuľku so stĺpcom pre každé pole v zázname. Voliteľne možno zadať hodnotu <code>newColumnNames</code> s cieľom zabezpečiť jedinečné názvy stĺpcov v novej tabuľke.    <ul>        <li><code>table</code>: Pôvodná tabuľka so stĺpcom záznamu, ktorá sa má rozbaliť. </li>        <li><code>column</code>: Stĺpec, ktorý sa má rozbaliť.</li>        <li><code>fieldNames</code>: Zoznam polí, ktoré sa majú rozbaliť do stĺpcov v tabuľke.</li>        <li><code>newColumnNames</code>: Zoznam názvov stĺpcov, ktoré majú poskytnúť nové stĺpce. Nové názvy stĺpcov nemôžu duplikovať žiadny stĺpec v novej tabuľke.</li>    </ul>


## Examples

### Example #1 
Rozbaľte stĺpec [a] v tabuľke &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; do 3 stĺpcov &#34;aa&#34;, &#34;bb&#34; a &#34;cc&#34;.
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
