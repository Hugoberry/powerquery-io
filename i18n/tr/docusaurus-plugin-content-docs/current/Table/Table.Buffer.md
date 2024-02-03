---
title: Table.Buffer
---

# Table.Buffer


## Description

Bir tabloyu değerlendirme sırasındaki dış değişikliklerden yalıtarak arabelleğe alır.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Tabloyu, değerlendirme sırasında dış değişikliklerden yalıtarak bellekte arabelleğe alır.    Önbelleğe alma yüzeysel bir işlemdir. Skaler hücre değerlerinin değerlendirilmesini zorlar ancak skaler olmayan değerleri (kayıtlar, listeler, tablolar vb.) olduğu gibi bırakır.    <br />    <br />    Bu işlevi kullanmanın sorgularınızın daha hızlı çalışmasını sağlayabileceğine veya sağlayamayacağına dikkat edin. Bu, bazı durumlarda tüm verileri okuma ve bellekte depolama ek maliyetinin yanı sıra,     arabelleğe almanın aşağı katlamayı önlemesi nedeniyle sorgularınızın daha yavaş çalışmasına neden olabilir. Verilerin arabelleğe alınması gerekmiyorsa    ancak aşağı katlamayı önlemek istiyorsanız bunun yerine <code>Table.StopFolding</code> kullanın.


## Examples

### Example #1 
Aşağı akış işlemlerinin artık SQL sunucusunu sorgulayamaması için SQL tablosunun tüm satırlarını belleğe yükleyin.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
