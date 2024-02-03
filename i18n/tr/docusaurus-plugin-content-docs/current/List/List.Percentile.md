---
title: List.Percentile
---

# List.Percentile


## Description

Verilen olasılıklara karşılık gelen bir veya daha fazla örnek yüzdebirlik değeri döndürür.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

<code>list</code> listesinin bir veya daha fazla örnek yüzdebirlik değerini döndürür. <code>percentiles</code> değeri 0,0 ile 1,0 arasında bir sayıysa yüzdebirlik olarak değerlendirilir ve sonuç, olasılığa karşılık gelen    tek bir değer olur. <code>percentiles</code> değeri 0,0 ile 1,0 arasındaki değerlere sahip sayıların bir listesiyse sonuç, giriş olasılığına karşılık gelen    yüzdebirliklerin bir listesi olur. İleri düzey kullanıcılar, daha belirgin bir ilişkilendirme yöntemi seçmek için <code>options</code> içindeki PercentileMode seçeneğini kullanabilir ancak bu, çoğu kullanım için önerilmez.    Önceden tanımlanan <code>PercentileMode.ExcelInc</code> ve <code>PercentileMode.ExcelExc</code> sembolleri,     <code>YÜZDEBİRLİK.DHL</code> ve <code>YÜZDEBİRLİK.HRC</code> Excel işlevleri tarafından kullanılan ilişkilendirme yöntemleriyle eşleşir. Varsayılan davranış <code>PercentileMode.ExcelInc</code> ile eşleşir.    <code>PercentileMode.SqlCont</code> ve <code>PercentileMode.SqlDisc</code> sembolleri sırasıyla <code>PERCENTILE_CONT</code> ve    <code>PERCENTILE_DISC</code> için SQL Server davranışıyla eşleşir.  


## Examples

### Example #1 
&lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; listesindeki ilk dörttebirliği bulun.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Excel&#39;in &lt;code&gt;YÜZDEBİRLİK.HRC&lt;/code&gt; işleviyle eşleşen ilişkilendirme yöntemini kullanarak &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; listesindeki dörttebirlikleri bulun.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
