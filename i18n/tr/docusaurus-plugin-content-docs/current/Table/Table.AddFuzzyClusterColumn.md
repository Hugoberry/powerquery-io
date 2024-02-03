---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

Tabloda belirtilen sütunun benzer gruplandırma değerleriyle elde edilen temsili değerleri içeren yeni bir sütun ekler.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Details

<code>table</code> tablosuna <code>columnName</code> temsili değerlerine sahip yeni bir <code>newColumnName</code> sütunu ekler. Temsilciler, her satır için <code>columnName</code> içindeki değerleri benzer şekilde eşleştirerek elde edilir.Anahtar sütunların nasıl karşılaştırılacağını belirtmek için isteğe bağlı bir <code>options</code> kümesi eklenebilir. Seçenekler şunlardır:<ul><li><code>Culture</code> : Kayıtları k&#252;lt&#252;re &#246;zg&#252; kurallara g&#246;re gruplandırmaya olanak tanır. Herhangi bir ge&#231;erli k&#252;lt&#252;r adı olabilir. &#214;rneğin, &quot;ja-JP&quot; K&#252;lt&#252;r se&#231;eneği, kayıtları Japon k&#252;lt&#252;r&#252;ne g&#246;re gruplandırır. Varsayılan değer: &quot;&quot;. Bu değer, kayıtları Sabit İngiliz k&#252;lt&#252;r&#252;ne g&#246;re gruplandırır.</li><li><code>IgnoreCase</code> : B&#252;y&#252;k/k&#252;&#231;&#252;k harfe duyarsız anahtar gruplandırmasına olanak tanıyan mantıksal (true/false) değer. &#214;rneğin, true olduğunda &quot;&#220;z&#252;mler&quot;, &quot;&#252;z&#252;mler&quot; ile gruplandırılır. Varsayılan değer true&#39;dur.</li><li><code>IgnoreSpace</code> : Grupları bulmak i&#231;in metin par&#231;alarının birleştirilmesine olanak tanıyan mantıksal (true/false) değer. &#214;rneğin, true olduğunda &quot;&#220;z &#252;mler&quot;, &quot;&#220;z&#252;mler&quot; ile gruplandırılır. Varsayılan değer true&#39;dur.</li><li><code>SimilarityColumnName</code> : Bir giriş değeri ile o giriş i&#231;in temsili değer arasındaki benzerliği g&#246;steren s&#252;tun adı. Varsayılan değer null&#39;dur, bu durumda benzerlikler i&#231;in yeni bir s&#252;tun eklenmeyecektir.</li><li><code>Threshold</code> : İki değerin gruplandırılacağı benzerlik puanını belirten, 0,00 ile 1,00 arasında bir sayı.    &#214;rneğin, &quot;&#220;z&#252;mler&quot; ve &quot;&#220;z&#252;ler&quot; (&quot;m&quot; eksik), yalnızca bu se&#231;enek 0,90&#39;dan az olarak ayarlandıysa birlikte gruplandırılır.    1,00 eşiği, yalnızca tam eşleşmelere izin verir.    (Benzer bir &quot;tam eşleşmenin&quot; b&#252;y&#252;k/k&#252;&#231;&#252;k harf, s&#246;zc&#252;k sırası ve noktalama işaretleri gibi farklılıkları g&#246;rmezden gelebileceğini unutmayın.)     Varsayılan değer 0,80&#39;dir.</li><li><code>TransformationTable</code> : Kayıtları &#246;zel değer eşlemelerine g&#246;re gruplandırmaya olanak tanıyan tablo. &quot;Kaynak&quot; ve &quot;Hedef&quot; s&#252;tunlarını i&#231;ermelidir. &#214;rneğin, &quot;Kaynak&quot; s&#252;tununda &quot;&#220;z&#252;mler&quot;, &quot;Hedef&quot; s&#252;tununda &quot;Kuru &#252;z&#252;mler&quot; değerlerini i&#231;eren bir d&#246;n&#252;ş&#252;m tablosu sağlanmışsa &quot;&#220;z&#252;mler&quot;, &quot;Kuru &#252;z&#252;mler&quot; ile gruplandırılır. D&#246;n&#252;ş&#252;m&#252;n, d&#246;n&#252;ş&#252;m tablosundaki metnin t&#252;m oluşumlarına uygulanacağını unutmayın. Yukarıdaki d&#246;n&#252;ş&#252;m tablosu ile &quot;&#220;z&#252;mler tatlıdır&quot; c&#252;mlesi de &quot;Kuru &#252;z&#252;mler tatlıdır&quot; c&#252;mlesi ile gruplandırılır.</li></ul><br />    


## Examples

### Example #1 
Çalışanların konumuyla ilgili temsili değerleri bulun.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
