---
title: List.Percentile
---

# List.Percentile


Verilen olasılıklara karşılık gelen bir veya daha fazla örnek yüzdebirlik değeri döndürür.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

`list` listesinin bir veya daha fazla örnek yüzdebirlik değerini döndürür. `percentiles` değeri 0,0 ile 1,0 arasında bir sayıysa yüzdebirlik olarak değerlendirilir ve sonuç, olasılığa karşılık gelen tek bir değer olur. `percentiles` değeri 0,0 ile 1,0 arasındaki değerlere sahip sayıların bir listesiyse sonuç, giriş olasılığına karşılık gelen yüzdebirliklerin bir listesi olur.  
  
İleri düzey kullanıcılar, daha belirgin bir ilişkilendirme yöntemi seçmek için `options` içindeki PercentileMode seçeneğini kullanabilir ancak bu, çoğu kullanım için önerilmez. Önceden tanımlanan `PercentileMode.ExcelInc` ve `PercentileMode.ExcelExc` sembolleri, `PERCENTILE.INC` ve `PERCENTILE.EXC` Excel işlevleri tarafından kullanılan ilişkilendirme yöntemleriyle eşleşir. Varsayılan davranış `PercentileMode.ExcelInc` ile eşleşir. Semboller `PercentileMode.SqlCont` ve `PercentileMode.SqlDisc` sembolleri sırasıyla `PERCENTILE_CONT` ve `PERCENTILE_DISC` için SQL Server davranışıyla eşleşir.


## Examples

### Example #1
`{5, 3, 1, 7, 9}` listesindeki ilk dörttebirliği bulun.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Excel'in `YÜZDEBİRLİK.HRC` işleviyle eşleşen ilişkilendirme yöntemini kullanarak `{5, 3, 1, 7, 9}` listesindeki dörttebirlikleri bulun.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
