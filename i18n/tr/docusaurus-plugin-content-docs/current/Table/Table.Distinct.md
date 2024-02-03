---
title: Table.Distinct
---

# Table.Distinct


## Description

Yinelenen satırları tablodan kaldırır.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Yinelenen satırları tablodan kaldırır.    İsteğe bağlı<code>equationCriteria</code> parametresi tablodaki hangi sütunlar için yineleme testi yapılacağını belirtir. <code>equationCriteria</code> belirtilmezse tüm sütunlar test edilir.<br />    <br />    Power Query bazen belirli işlemleri arka uç veri kaynaklarına boşalttığından (“kaynağa döndürme” olarak bilinir) ve ayrıca bazen kesinlikle gerekli olmayan işlemleri     atlayarak sorguları iyileştirdiğinden, genel olarak hangi yinelenen satırların korunacağı garanti edilemez.    Örneğin, benzersiz bir sütun değerleri kümesi içeren ilk satırın korunacağını ve tablodaki diğer satırların kaldırılacağını varsayamazsınız.    Yinelenenleri kaldırma işleminin beklendiği şekilde davranmasını istiyorsanız önce <code>Table.Buffer</code> kullanarak tabloyu arabelleğe alın.


## Examples

### Example #1 
Tablodaki yinelenen satırları kaldırır.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2 
&lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt; tablosunda [b] sütunundaki yinelenen satırları kaldırır.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
