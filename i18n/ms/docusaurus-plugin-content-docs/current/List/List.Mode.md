---
title: List.Mode
---

# List.Mode


## Description

Mengembalikan nilai paling kerap dalam senarai.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Mengembalikan item yang muncul paling kerap dalam senarai, <code>list</code>. Jika senarai kosong, pengecualian dikembalikan. Jika berbilang item muncul dengan kekerapan maksimum yang sama, yang terakhir dipilih.    Nilai <code>comparisonCriteria</code> pilihan, <code>equationCriteria</code>, boleh ditentukan untuk mengawal ujian persamaan. 


## Examples

### Example #1 
Cari item yang muncul paling kerap dalam senarai &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Cari item yang muncul paling kerap dalam senarai &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
