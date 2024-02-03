---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Bir sayıyı metin karakterine dönüştürür.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Sayı ile denk olan karakteri döndürür.<br />    <br />    Sağlanan <code>number</code> 21 bit Unicode kod noktası olması gerekir.


## Examples

### Example #1 
Bir sayıyı eşdeğer karakter değerine dönüştürün.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Bir karakteri sayıya dönüştürün ve tekrar geri dönün.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
&#34;Sırıtan yüz&#34; ifadesi için onaltılık kod noktasını eşdeğer UTF-16 vekil bileşen çiftine dönüştürün.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
