---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Bir kayıt sütununu her değeri içeren sütunlar olarak genişletir.


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

<code>table</code> girdisinde kayıtlara ait verilen <code>column</code> ile kayıttaki her alan için bir sütun içeren bir tablo oluşturur. İsteğe bağlı olarak, yeni tabloda sütunlara ait benzersiz adların olduğundan emin olmak için <code>newColumnNames</code> belirtilebilir.    <ul>        <li><code>table</code>: Genişletilecek kayıt sütununu içeren asıl tablo. </li>        <li><code>column</code>: Genişletilecek sütun.</li>        <li><code>fieldNames</code>: Tabloda sütunlar halinde genişletilecek alan listesi.</li>        <li><code>newColumnNames</code>: Yeni sütunlara verilecek sütun adları listesi. Yeni sütun adları yeni tablodaki hiçbir sütunu çoğaltamaz.</li>    </ul>


## Examples

### Example #1 
&lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; tablosundaki [a] sütununu &#34;aa&#34;, &#34;bb&#34; ve &#34;cc&#34; sütunlarına genişletir.
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
