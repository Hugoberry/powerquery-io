---
title: Table.FindText
---

# Table.FindText


## Description

Bir tabloda verilen metni içeren tüm sütunları döndürür.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

<code>table</code> tablosunda <code>text</code> metnini içeren sütunları döndürür. Metin bulunmazsa, boş bir tablo döndürülür.


## Examples

### Example #1 
&#34;Bob&#34; öğesini içeren tablodaki satırları bulur.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
