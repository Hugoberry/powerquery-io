---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Санды мәтін таңбасына түрлендіреді.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Санның таңбалық баламасын қайтарады.<br />    <br />    Берілген <code>number</code> 21 биттік Юникод код элементі болуы тиіс.


## Examples

### Example #1 
Санды оның баламалы таңбалық мәніне түрлендіріңіз.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Таңбаны санға және қайта түрлендіріңіз.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
&#34;Күліп тұрған бет&#34; эмотиконының он алтылық код нүктесін оның баламалы UTF-16 алмастырғыш жұбына түрлендіріңіз.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
