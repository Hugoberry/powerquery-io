---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Konverterar ett tecken till ett talvärde.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Returnerar talmotsvarigheten för <code>character</code>.<br />    <br />    Resultatet blir den 21-bitars Unicode-kodpunkt som representeras av det angivna tecknet eller surrogatparet.  


## Examples

### Example #1 
Konvertera ett tecken till motsvarande talvärde.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Konvertera UTF-16-surrogatparet för uttryckssymbolen &#34;leende ansikte&#34; till dess motsvarande hexadecimala kodpunkt.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
