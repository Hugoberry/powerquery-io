---
title: Character.ToNumber
---

# Character.ToNumber


Bir karakteri sayı değerine dönüştürür.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

`character` ile denk olan sayıyı döndürür.  
  
Sonuç, sağlanan karakter veya vekil bileşen çifti tarafından temsil edilen 21 bitlik Unicode kod noktası olur.


## Examples

### Example #1
Bir karakteri eşdeğer sayı değerine dönüştürün.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2
"Sırıtan yüz" ifadesi için UTF-16 vekil bileşen çiftini eşdeğer onaltılık kod noktasına dönüştürün.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
