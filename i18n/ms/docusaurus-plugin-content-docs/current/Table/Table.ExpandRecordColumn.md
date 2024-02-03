---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Mengembangkan lajur rekod menjadi lajur dengan setiap nilai.


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

Diberi <code>column</code> rekod dalam input <code>table</code>, mencipta jadual dengan lajur untuk setiap medan dalam rekod. Secara pilihan, <code>newColumnNames</code> mungkin ditentukan untuk memastikan nama unik untuk lajur dalam jadual baru.    <ul>        <li><code>table</code>: Jadual asal dengan lajur rekod untuk dikembangkan. </li>        <li><code>column</code>: Lajur untuk dikembangkan.</li>        <li><code>fieldNames</code>: Senarai medan untuk dikembangkan menjadi lajur dalam jadual.</li>        <li><code>newColumnNames</code>: Senarai nama lajur untuk diberi pada lajur baru. Nama lajur baru tidak boleh menjadi pendua sebarang lajur dalam jadual baru.</li>    </ul>


## Examples

### Example #1 
Kembangkan lajur [a] dalam jadual &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; menjadi 3 lajur &#34;aa&#34;, &#34;bb&#34; dan &#34;cc&#34;.
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
