---
title: List.Mode
---

# List.Mode


## Description

Menghasilkan nilai yang paling sering muncul dalam daftar.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Mengembalikan item yang paling sering muncul dalam daftar, <code>list</code>. Jika daftar kosong, pengecualian akan dibuat. Jika beberapa item muncul dengan frekuensi maksimum yang sama, item terakhir akan dipilih.    Nilai <code>comparisonCriteria</code> opsional, <code>equationCriteria</code>, dapat ditetapkan untuk mengontrol pengujian kesamaan. 


## Examples

### Example #1 
Mencari item yang paling sering muncul dalam daftar &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Mencari item yang paling sering muncul dalam daftar &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
