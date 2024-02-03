---
title: Text.Format
---

# Text.Format


## Description

Biçim dizesinden veya bağımsız değişkenlerden biçimlendirilmiş metin döndürür.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

<code>formatString</code> biçim dizesine listeden veya kayıttan <code>arguments</code> uygulanarak oluşturulan biçimlendirilmiş metni döndürür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "tr-TR").


## Examples

### Example #1 
Sayılardan oluşan bir liste biçimlendirin.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Amerika Birleşik Devletleri İngilizce kültürüne uygun şekilde, bir kayıttan farklı veri türlerini biçimlendirin.
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
