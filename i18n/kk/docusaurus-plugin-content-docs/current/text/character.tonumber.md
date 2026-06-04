---
title: Character.ToNumber
---

# Character.ToNumber


Таңбаны сандық мәніне түрлендіреді.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

`character` санының сандық баламасын қайтарады.  
  
Нәтиже берілген таңба немесе алмастырғыш жұбымен ұсынылған 21-биттік Юникод код элементі болады.


## Examples

### Example #1
Таңбаны оның баламалы сандық мәніне түрлендіріңіз.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2
"Күліп тұрған бет" эмотиконына арналған UTF-16 алмастырғыш жұбын оның баламалы он алтылық код нүктесіне түрлендіріңіз.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
